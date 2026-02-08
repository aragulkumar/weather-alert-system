import express from "express";
import axios from "axios";
import bodyParser from "body-parser";
import dotenv from "dotenv";

dotenv.config();
const API_KEY = process.env.API_KEY;
console.log("API KEY:", API_KEY);

let lastWeatherResult = null;
let searchHistory = [];

const weatherCache = {};
const CACHE_TTL = 10 * 60 * 1000; // 10 minutes

const app = express();
const port = process.env.PORT || 3000;


app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");

// GET route (first page load)
app.get("/", (req, res) => {
  const show = req.query.show === "1";
  const error = req.query.error || null;

  res.render("index", {
    weather: show ? lastWeatherResult : null,
    error,
    history: searchHistory,
  });

  // 🔥 clear after rendering
  if (show) {
    lastWeatherResult = null;
  }
});

// POST route (form submit)
app.post("/", async (req, res) => {
  const { city, day } = req.body;
  const cacheKey = `${city.toLowerCase()}-${day}`;

  // 🔹 1. CACHE CHECK (before API call)
  if (
    weatherCache[cacheKey] &&
    Date.now() - weatherCache[cacheKey].timestamp < CACHE_TTL
  ) {
    lastWeatherResult = weatherCache[cacheKey].data;
    return res.redirect("/?show=1");
  }

  try {
    // 🔹 2. API CALL
    const response = await axios.get(
      "https://api.openweathermap.org/data/2.5/forecast",
      {
        params: {
          q: city,
          appid: API_KEY,
          units: "metric",
        },
      },
    );

    // 🔹 3. PROCESS DATA
    const today = new Date();
    const targetDate = new Date(today);
    if (day === "tomorrow") targetDate.setDate(today.getDate() + 1);

    const targetDay = targetDate.toISOString().split("T")[0];

    const forecasts = response.data.list.filter((item) =>
      item.dt_txt.startsWith(targetDay),
    );

    let alerts = [];
    let temps = [];

    forecasts.forEach((f) => {
      temps.push(f.main.temp);

      if (["Fog", "Mist"].includes(f.weather[0].main)) {
        alerts.push({
          type: "fog",
          message: "🌫 Fog Alert: Low visibility expected",
        });
      }

      if (f.weather[0].main === "Rain" || f.pop >= 0.4) {
        alerts.push({
          type: "rain",
          message: "🌧 Rain Risk: Possible rainfall",
        });
      }

      if (f.main.temp >= 35) {
        alerts.push({
          type: "heat",
          message: "🔥 Heat Warning: High temperature",
        });
      }
    });

    alerts = [...new Set(alerts)];

    const avgTemp =
      temps.length > 0
        ? (temps.reduce((a, b) => a + b, 0) / temps.length).toFixed(1)
        : "N/A";

    lastWeatherResult = {
      city: response.data.city.name,
      dayLabel: day === "today" ? "Today" : "Tomorrow",
      temp: avgTemp,
      alerts,
    };
    const historyItem = {
      city: city.toLowerCase(),
      day,
    };

    if (
      !searchHistory.some(
        (h) => h.city === historyItem.city && h.day === historyItem.day,
      )
    ) {
      searchHistory.unshift(historyItem);
    }

    if (searchHistory.length > 5) {
      searchHistory.pop();
    }

    // 🔹 4. SAVE TO CACHE (THIS ANSWERS YOUR QUESTION)
    weatherCache[cacheKey] = {
      timestamp: Date.now(),
      data: lastWeatherResult,
    };

    // 🔹 5. REDIRECT (PRG pattern)
    res.redirect("/?show=1");
  } catch (err) {
    lastWeatherResult = null;
    res.redirect("/?error=Weather fetch failed");
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
