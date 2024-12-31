import React from 'react';

const WeatherDisplay = ({ weather }) => {
  if (!weather) {
    return <p>No weather data to display.</p>;
  }

  return (
    <div>
      <h2>{weather.name}</h2>
      <p>Temperature: {weather.temperature}°C</p>
      <p>Condition: {weather.description}</p>
    </div>
  );
};

export default WeatherDisplay;
