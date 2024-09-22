import React, { useState } from "react";

export default function Temperature(props) {
  const [unit, setUnit] = useState("celsius");

  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("Fahrenheit");
  }
  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }
  function fahrenheitTemprature() {
    return Math.round((props.celsius * 9) / 5 + 32);
  }
  if (unit === "celsius") {
    return (
      <div className="Temperature">
        <span className="temperature">{props.celsius}</span>
        <span className="unit">
          ℃ |{" "}
          <a href="/" onClick={showFahrenheit}>
            ℉
          </a>
        </span>
      </div>
    );
  } else {
    return (
      <div className="Temperature">
        <span className="temperature">{fahrenheitTemprature()}</span>
        <span className="unit">
          <a href="/" onClick={showCelsius}>
            ℃{" "}
          </a>
          | ℉
        </span>
      </div>
    );
  }
}
