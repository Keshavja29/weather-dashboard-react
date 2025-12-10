import React, { useState, useEffect } from 'react';
import axios from 'axios';
import WeatherCard from './components/WeatherCard';
import Forecast from './components/Forecast';
import SearchBar from './components/SearchBar';
import WeatherChart from './components/WeatherChart';
import './App.css';

const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;
const BASE_URL = 'https://api.openweathermap.org/data/2.5';

function App() {
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState(null);
  const [city, setCity] = useState('Delhi');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [unit, setUnit] = useState('metric'); // metric or imperial

  useEffect(() => {
    fetchWeatherData(city);
  }, [city, unit]);

  const fetchWeatherData = async (cityName) => {
    setLoading(true);
    setError(null);
    
    try {
      // Fetch current weather
      const weatherResponse = await axios.get(
        `${BASE_URL}/weather?q=${cityName}&units=${unit}&appid=${API_KEY}`
      );
      setWeather(weatherResponse.data);

      // Fetch 7-day forecast
      const forecastResponse = await axios.get(
        `${BASE_URL}/forecast?q=${cityName}&units=${unit}&appid=${API_KEY}`
      );
      setForecast(forecastResponse.data);
      
      setLoading(false);
    } catch (err) {
      setError('City not found. Please try again.');
      setLoading(false);
    }
  };

  const handleSearch = (searchCity) => {
    setCity(searchCity);
  };

  const toggleUnit = () => {
    setUnit(unit === 'metric' ? 'imperial' : 'metric');
  };

  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(async (position) => {
        const { latitude, longitude } = position.coords;
        
        try {
          const response = await axios.get(
            `${BASE_URL}/weather?lat=${latitude}&lon=${longitude}&units=${unit}&appid=${API_KEY}`
          );
          setCity(response.data.name);
        } catch (err) {
          setError('Unable to fetch location weather');
        }
      });
    }
  };

  return (
    <div className="App">
      <header className="app-header">
        <h1>🌤️ Weather Dashboard</h1>
        <div className="header-controls">
          <button onClick={toggleUnit} className="unit-toggle">
            {unit === 'metric' ? '°C' : '°F'}
          </button>
          <button onClick={getLocation} className="location-btn">
            📍 Use My Location
          </button>
        </div>
      </header>

      <SearchBar onSearch={handleSearch} />

      {loading && <div className="loading">Loading weather data...</div>}
      {error && <div className="error">{error}</div>}

      {weather && !loading && (
        <>
          <WeatherCard weather={weather} unit={unit} />
          {forecast && <WeatherChart forecast={forecast} unit={unit} />}
          {forecast && <Forecast forecast={forecast} unit={unit} />}
        </>
      )}
    </div>
  );
}

export default App;
