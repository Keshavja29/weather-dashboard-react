import React from 'react';
import { WiDaySunny, WiCloudy, WiRain, WiSnow, WiThunderstorm } from 'react-icons/wi';
import './WeatherCard.css';

const WeatherCard = ({ weather, unit }) => {
  const getWeatherIcon = (condition) => {
    const iconMap = {
      Clear: <WiDaySunny />,
      Clouds: <WiCloudy />,
      Rain: <WiRain />,
      Snow: <WiSnow />,
      Thunderstorm: <WiThunderstorm />
    };
    return iconMap[condition] || <WiDaySunny />;
  };

  const formatTime = (timestamp) => {
    return new Date(timestamp * 1000).toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <div className="weather-card">
      <div className="weather-main">
        <div className="weather-icon">
          {getWeatherIcon(weather.weather[0].main)}
        </div>
        <div className="weather-info">
          <h2>{weather.name}, {weather.sys.country}</h2>
          <div className="temperature">
            {Math.round(weather.main.temp)}°{unit === 'metric' ? 'C' : 'F'}
          </div>
          <div className="condition">{weather.weather[0].description}</div>
          <div className="feels-like">
            Feels like {Math.round(weather.main.feels_like)}°
          </div>
        </div>
      </div>

      <div className="weather-details">
        <div className="detail-item">
          <span className="label">Humidity</span>
          <span className="value">{weather.main.humidity}%</span>
        </div>
        <div className="detail-item">
          <span className="label">Wind Speed</span>
          <span className="value">
            {weather.wind.speed} {unit === 'metric' ? 'm/s' : 'mph'}
          </span>
        </div>
        <div className="detail-item">
          <span className="label">Pressure</span>
          <span className="value">{weather.main.pressure} hPa</span>
        </div>
        <div className="detail-item">
          <span className="label">Visibility</span>
          <span className="value">{(weather.visibility / 1000).toFixed(1)} km</span>
        </div>
        <div className="detail-item">
          <span className="label">Sunrise</span>
          <span className="value">{formatTime(weather.sys.sunrise)}</span>
        </div>
        <div className="detail-item">
          <span className="label">Sunset</span>
          <span className="value">{formatTime(weather.sys.sunset)}</span>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;
