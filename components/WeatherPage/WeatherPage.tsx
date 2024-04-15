import React, { useState, useEffect } from 'react';
import { getWeather } from '../../services/ApiService';
import './styles.css';

const WeatherPage: React.FC = () => {
  const [city, setCity] = useState<string>('');
  const [weather, setWeather] = useState<any>(null);

  const getWeatherData = () => {
    // Implement function to fetch weather data
  }

  useEffect(() => {
    getWeatherData();
  }, []);

  return (
    <div id="weather-container">
      <h2>Weather App</h2>
      <input type="text" value={city} onChange={(e) => setCity(e.target.value)} placeholder="Enter city" />
      <button onClick={getWeatherData}>Search</button>
      {weather && (
        <>
          <img id="weather-icon" alt="Weather Icon" src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}.png`} />
          <div id="temp-div">
            <p>{Math.round(weather.main.temp - 273.15)}°C</p>
          </div>
          <div id="weather-info">
            <p>{weather.name}</p>
            <p>{weather.weather[0].description}</p>
          </div>
          <div id="hourly-forecast">
            {/* Hourly forecast will be displayed here */}
          </div>
        </>
      )}
    </div>
  );
}

export default WeatherPage;
