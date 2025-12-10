import React from 'react';
import './Forecast.css';

const Forecast = ({ forecast, unit }) => {
  // Group forecast by day (API gives 3-hour intervals)
  const dailyForecast = forecast.list.filter((item, index) => index % 8 === 0).slice(0, 7);

  const getDayName = (timestamp) => {
    return new Date(timestamp * 1000).toLocaleDateString('en-US', { weekday: 'short' });
  };

  const getWeatherEmoji = (condition) => {
    const emojiMap = {
      Clear: '☀️',
      Clouds: '☁️',
      Rain: '🌧️',
      Snow: '❄️',
      Thunderstorm: '⛈️',
      Drizzle: '🌦️',
      Mist: '🌫️'
    };
    return emojiMap[condition] || '🌤️';
  };

  return (
    <div className="forecast-container">
      <h3>7-Day Forecast</h3>
      <div className="forecast-grid">
        {dailyForecast.map((day, index) => (
          <div key={index} className="forecast-card">
            <div className="forecast-day">{getDayName(day.dt)}</div>
            <div className="forecast-icon">
              {getWeatherEmoji(day.weather[0].main)}
            </div>
            <div className="forecast-temp">
              <span className="temp-high">
                {Math.round(day.main.temp_max)}°
              </span>
              <span className="temp-low">
                {Math.round(day.main.temp_min)}°
              </span>
            </div>
            <div className="forecast-condition">
              {day.weather[0].description}
            </div>
            <div className="forecast-details">
              <span>💧 {day.main.humidity}%</span>
              <span>💨 {day.wind.speed} {unit === 'metric' ? 'm/s' : 'mph'}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Forecast;
