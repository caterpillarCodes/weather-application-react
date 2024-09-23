import React from "react";

export default function ForecastDay(props) {
  let iconUrl = `http://shecodes-assets.s3.amazonaws.com/api/weather/icons/${props.data.condition.icon}.png`;
  function day() {
    let date = new Date(props.data.time * 1000);
    let weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    let day = weekDays[date.getDay()];
    return day;
  }
  function temperatureMin() {
    let temperatureMin = Math.round(props.data.temperature.minimum);
    return `${temperatureMin}°`;
  }
  function temperatureMax() {
    let temperatureMax = Math.round(props.data.temperature.maximum);
    return `${temperatureMax}°`;
  }
  return (
    <div className="ForecastDay">
      <div>{day()}</div>
      <img src={iconUrl} alt={props.data.condition.description} />
      <div className="forecast-temperature">
        <span className="forecast-Temprature-max">{temperatureMax()}</span>
        <span className="forecast-Temprature-min">{temperatureMin()}</span>
      </div>
    </div>
  );
}
