import React, { useState } from "react";
import WeatherForecast from "./WeatherForecast";
import WeatherInfo from "./WeatherInfo";
import axios from "axios";
import "./weatherapp.css";
export default function WeatherApp(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);
  function handleResponse(response) {
    setWeatherData({
      ready: true,
      coords: response.data.coordinates,
      date: new Date(response.data.time * 1000),
      description: response.data.condition.description,
      city: response.data.city,
      temperature: Math.round(response.data.temperature.current),
      pressure: response.data.temperature.pressure,
      humidity: response.data.temperature.humidity,
      wind: Math.round(response.data.wind.speed),
      icon: response.data.condition.icon,
    });
  }
  function search() {
    let apiKey = "bt37d0c8d5a2c2ed42becf34acbbdcoa";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
  }
  function handleSubmit(event) {
    event.preventDefault();
    search();
  }
  function updateCity(event) {
    setCity(event.target.value);
  }
  if (weatherData.ready) {
    return (
      <div className="WeatherApp text-capitalize">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Enter a city.."
                className="form-control "
                onChange={updateCity}
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
        <WeatherInfo data={weatherData} />
        <WeatherForecast coordinates={weatherData.coords} />
      </div>
    );
  } else {
    search();
    return "loading...";
  }
}
