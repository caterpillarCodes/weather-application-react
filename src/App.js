import React from "react";
import WeatherApp from "./WeatherApp";
import "./App.css";
export default function App() {
  return (
    <div className="App">
      <div className="container">
        <WeatherApp defaultCity="New York" />
        <footer className="footer">
          This project was coded by caterpillarCodes and is{" "}
          <a
            href="https://github.com/caterpillarCodes/weather-application-react"
            target="_blank"
            rel="noopener noreferrer"
          >
            open-sourced on GitHub
          </a>{" "}
          and hosted on Vercel
        </footer>
      </div>
    </div>
  );
}
