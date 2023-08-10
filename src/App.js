import React from 'react';
import Weather from "./Weather";

import './App.css';

export default function App() {
    return (
      <div className="App">
        <div className="container">
          <Weather defaultCity="New York" />
          <footer>
            Coded by Maja Kucinska-Kijo, {""}
          <a href="https://github.com/majakucinska/react-weather-app" target="_blank">open-sourced on GitHub</a>
          </footer>
        </div>
      </div>
    );
  }

