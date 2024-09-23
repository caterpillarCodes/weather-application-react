import React, { useState } from "react";
import "./WeatherForecast.css";
import axios from "axios";
import ForecastDay from "./ForecastDay";
export default function WeatherForecast(props) {
  const [loaded, setLoaded] = useState(false);
  const [forecastData, setForecastData] = useState("");
  function handleResponse(response) {
    console.log(response);
    setForecastData({
      data: response.data,
    });
    setLoaded(true);
  }

  if (loaded) {
    return (
      <div className="WeatherForecast">
        <div className="row">
          <div className="col">
            <ForecastDay data={forecastData.data} />
          </div>
        </div>
      </div>
    );
  } else {
    let apiKey = "bt37d0c8d5a2c2ed42becf34acbbdcoa";
    let longitude = props.coordinates.longitude;
    let latitude = props.coordinates.latitude;
    let apiUrl = `https://api.shecodes.io/weather/v1/forecast?lon=${longitude}&lat=${latitude}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
  }
  return null;
}
