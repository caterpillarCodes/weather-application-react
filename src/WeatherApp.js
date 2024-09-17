import React from "react";
import "./weatherapp.css";
export default function WeatherApp() {
  return (
    <div className="WeatherApp">
      <form>
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="Enter a city.."
              className="form-control"
            />
          </div>
          <div className="col-3">
            <input type="submit" value="Search" className="btn btn-primary" />
          </div>
        </div>
      </form>
      <h1>New York</h1>
      <ul>
        <li>Tuesday 14:00</li>
        <li>Partly cloudy</li>
      </ul>
      <div className="row">
        <div className="col-6">
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
            alt="partly cloudy"
          />
          26℃
        </div>
        <div className="col-6">
          <ul>
            <li>Precipitation: 0%</li>
            <li>Humidity: 58%</li>
            <li>Wind: 11 km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
