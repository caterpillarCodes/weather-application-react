import React from "react";
import WeatherApp from "./WeatherApp";
export default function App() {
  return (
    <div className="App">
      <div className="container">
        <WeatherApp defaultCity="New York" />
      </div>
    </div>
  );
}
