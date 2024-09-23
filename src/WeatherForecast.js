import React from "react";
import "./WeatherForecast.css";
export default function WeatherForecast(props) {
  let iconUrl = `http://shecodes-assets.s3.amazonaws.com/api/weather/icons/${props.iconcode}.png`;
  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div>Thu</div>
          <img src={iconUrl} alt={props.iconcode} />
          <div className="temperature">
            <span className="forecast-Temprature-max">19°</span>
            <span className="forecast-Temprature-min">10°</span>
          </div>
        </div>
      </div>
    </div>
  );
}
