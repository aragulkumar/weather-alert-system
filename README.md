<div align="center">

# 🌦️ Weather Alert System

### *Transform Raw Weather Data into Clear, Actionable Insights*

[![Live Demo](https://img.shields.io/badge/demo-live-success?style=for-the-badge&logo=render)](https://weather-alert-system-a8vf.onrender.com)
[![License](https://img.shields.io/badge/license-MIT-blue?style=for-the-badge)](LICENSE)
[![Node.js](https://img.shields.io/badge/Node.js-18+-green?style=for-the-badge&logo=node.js)](https://nodejs.org)
[![Express](https://img.shields.io/badge/Express-4.x-black?style=for-the-badge&logo=express)](https://expressjs.com)

**A clean, intelligent weather alert platform designed for speed, clarity, and real-world usefulness.**

[Live Demo](https://weather.aragulkumar.com/) • [Report Bug](https://github.com/aragulkumar/weather-alert-system/issues) • [Request Feature](https://github.com/aragulkumar/weather-alert-system/issues)

</div>

---

## 📸 Preview

![Weather Alert System Preview](/assets/preview.png)

> *A minimal, professional UI that highlights what matters: location, timing, and alerts.*

---

## 🎯 Why This Project?

Instead of bombarding users with overwhelming charts and data, this Weather Alert System **thinks for the user**:

- 🌫️ **Fog Detection** — Will visibility be reduced during your commute?
- 🌧️ **Rain Risk Analysis** — Is rain likely enough to disrupt outdoor plans?
- 🔥 **Heat Warnings** — Is the temperature crossing dangerous thresholds?

Built as a **production-ready full-stack application**, this project demonstrates:
- ✅ Practical backend logic with efficient API usage
- ✅ Smart caching to prevent rate limit issues
- ✅ Clean, responsive user experience
- ✅ RESTful architecture with proper HTTP patterns

**Perfect for:** Learning, portfolios, real deployment, or as a foundation for advanced weather applications.

---

## ✨ Features

### Core Functionality
- 🔍 **City Search** — Search weather by city name worldwide
- 📅 **Time Selection** — Choose between "Today" or "Tomorrow" forecasts
- ⚡ **Instant Results** — Fast response times with intelligent caching
- 🕘 **Search History** — Quick access to recent searches

### Smart Alerts
The system analyzes forecast data and generates contextual alerts:

| Alert Type | Trigger Condition | Icon |
|------------|------------------|------|
| **Fog Alert** | Low visibility conditions detected | 🌫️ |
| **Rain Risk** | Significant precipitation probability | 🌧️ |
| **Heat Warning** | Temperatures exceeding safety thresholds | 🔥 |

### Technical Highlights
- 🔐 **Secure Configuration** — Environment variable management with dotenv
- 📦 **Response Caching** — Prevents API rate limiting with TTL-based in-memory cache
- 🔄 **PRG Pattern** — POST → Redirect → GET for stable browser experience
- 🎨 **Responsive Design** — Clean UI that works on all devices
- 🌐 **Production Ready** — Deployed on Render with proper error handling

---

## 🛠️ Tech Stack

<table>
  <tr>
    <td align="center" width="96">
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" width="48" height="48" alt="Node.js" />
      <br>Node.js
    </td>
    <td align="center" width="96">
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" width="48" height="48" alt="Express" />
      <br>Express
    </td>
    <td align="center" width="96">
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" width="48" height="48" alt="HTML5" />
      <br>HTML5
    </td>
    <td align="center" width="96">
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" width="48" height="48" alt="CSS3" />
      <br>CSS3
    </td>
    <td align="center" width="96">
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" width="48" height="48" alt="JavaScript" />
      <br>JavaScript
    </td>
  </tr>
</table>

**Backend:** Node.js, Express.js  
**Frontend:** EJS (Embedded JavaScript), HTML5, CSS3  
**API Integration:** OpenWeather Forecast API, Axios  
**Configuration:** dotenv  
**Deployment:** Render  

---

## 🚀 Quick Start

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- OpenWeather API key ([Get one free here](https://openweathermap.org/api))

### Installation

1️⃣ **Clone the repository**
```bash
git clone https://github.com/aragulkumar/weather-alert-system.git
cd weather-alert-system
```

2️⃣ **Install dependencies**
```bash
npm install
```

3️⃣ **Configure environment variables**

Create a `.env` file in the root directory:
```env
API_KEY=your_openweather_api_key_here
PORT=3000
```

> 💡 **Get your API key:** Visit [OpenWeather API](https://openweathermap.org/api) and sign up for a free account.

4️⃣ **Start the server**
```bash
npm start
```

5️⃣ **Access the application**

Open your browser and navigate to:
```
http://localhost:3000
```

---

## 🌐 Live Demo

Experience the app in action:

**🔗 [https://weather-alert-system-a8vf.onrender.com](https://weather-alert-system-a8vf.onrender.com)**

> ⚠️ **Note:** Free tier hosting may experience a brief cold-start delay on first load.

---

## 🧠 How It Works

### Architecture Overview

```
User Request → Express Server → Cache Check → OpenWeather API → Data Processing → Alert Generation → Response
```

### Workflow Details

1. **API Integration**
   - Uses OpenWeather's 5-day / 3-hour forecast API
   - Fetches comprehensive weather data for any city globally

2. **Data Processing**
   - Filters forecast data based on user's selected day (Today/Tomorrow)
   - Computes average temperature from forecast periods
   - Analyzes weather conditions for alert triggers

3. **Alert Logic**
   - **Fog Alert:** Triggered by weather conditions indicating low visibility (fog, mist, haze)
   - **Rain Risk:** Generated when precipitation probability exceeds threshold
   - **Heat Warning:** Activated when temperature surpasses safety limits

4. **Caching Strategy**
   - Implements in-memory cache with Time-To-Live (TTL)
   - Reduces redundant API calls for frequently searched cities
   - Improves response time and prevents rate limiting

5. **User Experience**
   - Maintains recent search history for quick re-access
   - Uses POST-Redirect-GET pattern to prevent form resubmission
   - Clean, distraction-free interface focusing on critical information

---

## 📁 Project Structure

```
weather-alert-system/
│
├── public/                 # Static assets
│   └── main.css           # Stylesheet
│
├── views/                 # EJS templates
│   └── index.ejs         # Main page template
│
├── index.js              # Express server & application logic
├── package.json          # Dependencies and scripts
├── package-lock.json     # Dependency lock file
├── .env                  # Environment variables (not tracked)
├── .gitignore           # Git ignore rules
└── README.md            # Project documentation
```

### Key Files

- **`index.js`** — Core application logic, API integration, alert generation
- **`views/index.ejs`** — Frontend template with dynamic content rendering
- **`public/main.css`** — Responsive styling and UI components
- **`.env`** — Configuration file for API keys and environment settings

---

## 📊 API Reference

### OpenWeather Forecast API

**Endpoint:** `https://api.openweathermap.org/data/2.5/forecast`

**Parameters:**
- `q` — City name
- `appid` — Your API key
- `units` — Metric (Celsius) or Imperial (Fahrenheit)

**Response Includes:**
- 3-hour interval forecasts for 5 days
- Temperature, humidity, weather conditions
- Wind speed, precipitation probability
- Atmospheric pressure

[Full API Documentation →](https://openweathermap.org/forecast5)

---

## ⚙️ Configuration

### Environment Variables

| Variable | Description | Required | Default |
|----------|-------------|----------|---------|
| `API_KEY` | OpenWeather API key | ✅ Yes | — |
| `PORT` | Server port number | ❌ No | 3000 |

### Cache Configuration

The application uses an in-memory cache with:
- **TTL:** 30 minutes (configurable in code)
- **Storage:** Global scope (resets on server restart)
- **Purpose:** Minimize API calls and improve performance

---

## ⚠️ Known Limitations

| Issue | Impact | Mitigation |
|-------|--------|------------|
| In-memory cache | Data lost on server restart | Consider Redis for production |
| Free hosting | Cold-start delay (10-30s) | Upgrade to paid tier or use keepalive pings |
| Global search history | Shared across all users | Implement user sessions |
| No hour-by-hour alerts | Day-level granularity only | Feature enhancement planned |

---

## 🔮 Roadmap

### Planned Improvements

- [ ] **Persistent Cache** — Migrate to Redis or database-backed caching
- [ ] **User Authentication** — Personal accounts with saved preferences
- [ ] **Per-User History** — Individual search history and favorites
- [ ] **Hourly Alerts** — Time-specific weather warnings
- [ ] **REST API** — Expose alert logic as a public API
- [ ] **Mobile App** — Native iOS and Android applications
- [ ] **Notification System** — Email/SMS/Push notifications for severe weather
- [ ] **Extended Forecasts** — 7-day and 14-day outlooks
- [ ] **Weather Maps** — Visual radar and satellite imagery
- [ ] **Multi-Language Support** — Internationalization

### Community Suggestions

Have an idea? [Open an issue](https://github.com/aragulkumar/weather-alert-system/issues) or submit a pull request!

---

## 🤝 Contributing

Contributions are welcome and appreciated! Here's how you can help:

1. **Fork the repository**
2. **Create a feature branch** (`git checkout -b feature/AmazingFeature`)
3. **Commit your changes** (`git commit -m 'Add some AmazingFeature'`)
4. **Push to the branch** (`git push origin feature/AmazingFeature`)
5. **Open a Pull Request**

### Development Guidelines

- Follow existing code style and conventions
- Write clear commit messages
- Add comments for complex logic
- Test thoroughly before submitting PR

---

## 🐛 Bug Reports

Found a bug? Please [open an issue](https://github.com/aragulkumar/weather-alert-system/issues) with:
- Clear description of the problem
- Steps to reproduce
- Expected vs actual behavior
- Screenshots (if applicable)
- Your environment (OS, browser, Node version)

---

## 📝 License

This project is licensed under the **MIT License** — free to use, modify, and distribute.

See the [LICENSE](LICENSE) file for full details.

---

## 👨‍💻 Author

<div align="center">

### **Ragul Kumar A**

[![GitHub](https://img.shields.io/badge/GitHub-aragulkumar-black?style=flat-square&logo=github)](https://github.com/aragulkumar)
[![Website](https://img.shields.io/badge/Website-aragulkumar.com-blue?style=flat-square&logo=google-chrome)](https://aragulkumar.com)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-0077B5?style=flat-square&logo=linkedin)](https://www.linkedin.com/in/aragulkumar)

*Full-stack developer passionate about building practical, user-focused applications*

</div>

---

## 🙏 Acknowledgments

- **OpenWeather** — For providing the comprehensive weather API
- **Render** — For reliable and free hosting services
- **Node.js Community** — For excellent libraries and documentation
- **All Contributors** — Thank you for your support and feedback!

---

## 📞 Support

If you find this project helpful, consider:

- ⭐ **Starring the repository** to show your support
- 🐛 **Reporting bugs** to help improve the project
- 💡 **Suggesting features** to make it even better
- 🔄 **Sharing** with others who might find it useful

---

<div align="center">

**Made with ❤️ and ☕ by Ragul Kumar A**

*If you enjoyed this project, check out my other work on [GitHub](https://github.com/aragulkumar)*

[![GitHub followers](https://img.shields.io/github/followers/aragulkumar?label=Follow&style=social)](https://github.com/aragulkumar)

</div>
