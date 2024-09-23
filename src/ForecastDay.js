import React from "react";

export default function ForecastDay(props) {
  let iconUrl = `http://shecodes-assets.s3.amazonaws.com/api/weather/icons/${props.data.daily[0].condition.icon}.png`;
  function day() {
    let date = new Date(props.data.daily[0].time * 1000);
    let weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    let day = weekDays[date.getDay()];
    return day;
  }
  function temperatureMin() {
    let temperatureMin = Math.round(props.data.daily[0].temperature.minimum);
    return `${temperatureMin}°`;
  }
  function temperatureMax() {
    let temperatureMax = Math.round(props.data.daily[0].temperature.maximum);
    return `${temperatureMax}°`;
  }
  return (
    <div className="ForecastDay">
      <div>{day()}</div>
      <img src={iconUrl} alt={props.data.daily[0].condition.description} />
      <div className="forecast-temperature">
        <span className="forecast-Temprature-max">{temperatureMax()}</span>
        <span className="forecast-Temprature-min">{temperatureMin()}</span>
      </div>
    </div>
  );
}
