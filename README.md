# 🌤️ Weather Dashboard

A beautiful, real-time weather dashboard built with React that provides current weather conditions, 7-day forecasts, and interactive weather maps.

## ✨ Features

- **Real-time Weather Data** - Current temperature, humidity, wind speed
- **7-Day Forecast** - Detailed weekly weather predictions
- **City Search** - Search weather for any city worldwide
- **Geolocation** - Auto-detect user's location
- **Weather Maps** - Interactive temperature and precipitation maps
- **Beautiful Charts** - Temperature trends visualization
- **Responsive Design** - Works on all devices
- **Weather Icons** - Dynamic icons based on conditions

## 🛠️ Tech Stack

- React 18
- OpenWeatherMap API
- Chart.js (Weather trends)
- Axios (API calls)
- CSS3 (Animations & Gradients)
- Geolocation API

## 🚀 Installation

```bash
# Clone repository
git clone https://github.com/Keshavja29/weather-dashboard-react.git
cd weather-dashboard-react

# Install dependencies
npm install

# Create .env file
echo "REACT_APP_WEATHER_API_KEY=your_openweathermap_api_key" > .env

# Start development server
npm start
```

## 🔑 Get API Key

1. Visit: https://openweathermap.org/api
2. Sign up for free account
3. Get your API key
4. Add to `.env` file

## 📱 Features Breakdown

### Current Weather
- Temperature (°C/°F)
- Feels like temperature
- Humidity percentage
- Wind speed & direction
- Pressure
- Visibility
- Sunrise/Sunset times

### 7-Day Forecast
- Daily high/low temperatures
- Weather conditions
- Precipitation probability
- Wind information

### Search & Location
- Search by city name
- Auto-complete suggestions
- Geolocation detection
- Recent searches history

## 🎨 UI Features

- Gradient backgrounds based on weather
- Smooth animations
- Loading states
- Error handling
- Dark/Light mode toggle

## 📊 Charts

- Temperature trend (7 days)
- Humidity levels
- Wind speed variations

## 🌐 Deployment

### Deploy on Vercel

```bash
npm install -g vercel
vercel login
vercel --prod
```

Add environment variable in Vercel dashboard:
- `REACT_APP_WEATHER_API_KEY`

## 📸 Screenshots

[Add screenshots here]

## 🔮 Future Enhancements

- Weather alerts & notifications
- Multiple location tracking
- Historical weather data
- Air quality index
- UV index information
- Weather radar

## 📄 License

MIT License
