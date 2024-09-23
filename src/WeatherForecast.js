import React from "react";
import "./WeatherForecast.css";
import axios from "axios";
export default function WeatherForecast(props) {
  function handleResponse(response) {
    console.log(response);
  }
  let iconUrl = `http://shecodes-assets.s3.amazonaws.com/api/weather/icons/${props.iconcode}.png`;
  let apiKey = "bt37d0c8d5a2c2ed42becf34acbbdcoa";
  let longitude = props.coordinates.longitude;
  let latitude = props.coordinates.latitude;
  let apiUrl = `https://api.shecodes.io/weather/v1/forecast?lon=${longitude}&lat=${latitude}&key=${apiKey}`;
  axios.get(apiUrl).then(handleResponse);
  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div>Thu</div>
          <img src={iconUrl} alt={props.iconcode} />
          <div className="forecast-temperature">
            <span className="forecast-Temprature-max">19°</span>
            <span className="forecast-Temprature-min">10°</span>
          </div>
        </div>
      </div>
    </div>
  );
}
