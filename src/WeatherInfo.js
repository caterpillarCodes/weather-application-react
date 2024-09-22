import React from "react";
import FormattedDate from "./FormattedDate";

export default function WeatherInfo(props) {
  let iconUrl = `"http://shecodes-assets.s3.amazonaws.com/api/weather/icons/${props.data.icon}.png"`;
  return (
    <div className="WeatherInfo">
      <h1>{props.data.city}</h1>
      <ul>
        <li>
          <FormattedDate date={props.data.date} />
        </li>
        <li>{props.data.description}</li>
      </ul>
      <div className="row">
        <div className="col-6">
          <img src={iconUrl} alt="partly cloudy" />

          <span className="temperature">{props.data.temperature}</span>
          <span className="unit">℃</span>
        </div>
        <div className="col-6">
          <ul>
            <li>pressure: {props.data.pressure}</li>
            <li>Humidity: {props.data.humidity}%</li>
            <li>Wind:{props.data.wind} km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
