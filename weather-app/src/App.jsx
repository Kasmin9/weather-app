import React, { useState } from 'react';
import './App.css';
import SearchBar from './components/SearchBar';
import WeatherDisplay from './components/WeatherDisplay';
import axios from 'axios';

const App = () => {
  const [weather, setWeather] = useState(null);

  const fetchWeather = async (city) => {
    try {
      const apiKey = 'YOUR_API_KEY'; // Replace with your OpenWeatherMap API key
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`
      );
  
      const data = response.data;
      setWeather({
        name: data.name,
        temperature: data.main.temp,
        description: data.weather[0].description,
      });
    } catch (error) {
      console.error(error);
      alert('Could not fetch weather data. Please check the city name or try again later.');
    }
  };
  

      

  return (
    <div className="container">
      <h1>Weather App</h1>
      <SearchBar onSearch={fetchWeather} />
      <WeatherDisplay weather={weather} />
    </div>
  );
};

export default App;
