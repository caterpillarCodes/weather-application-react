import React, { useState } from "react";
import axios from "axios";
import "./weatherapp.css";
export default function WeatherApp(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });

  function handleResponse(response) {
    console.log(response);
    setWeatherData({
      ready: true,
      date: "Tuesday 14:00",
      description: response.data.condition.description,
      city: response.data.city,
      temperature: Math.round(response.data.temperature.current),
      pressure: response.data.temperature.pressure,
      humidity: response.data.temperature.humidity,
      wind: Math.round(response.data.wind.speed),
      icon: "https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png",
    });
  }
  if (weatherData.ready) {
    return (
      <div className="WeatherApp text-capitalize">
        <form>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Enter a city.."
                className="form-control "
              />
            </div>
            <div className="col-3">
              <input
                type="submit"
                value="Search"
                className="btn btn-primary w-100"
              />
            </div>
          </div>
        </form>
        <h1>{weatherData.city}</h1>
        <ul>
          <li>{weatherData.date}</li>
          <li>{weatherData.description}</li>
        </ul>
        <div className="row">
          <div className="col-6">
            <img src={weatherData.icon} alt="partly cloudy" />

            <span className="temperature">{weatherData.temperature}</span>
            <span className="unit">℃</span>
          </div>
          <div className="col-6">
            <ul>
              <li>pressure: {weatherData.pressure}</li>
              <li>Humidity: {weatherData.humidity}%</li>
              <li>Wind:{weatherData.wind} km/h</li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    let apiKey = "bt37d0c8d5a2c2ed42becf34acbbdcoa";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${props.defaultCity}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
    return "loading...";
  }
}
