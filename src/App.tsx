import React from "react";
import "./App.css";
import { Date } from "./Date";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Event</p>
        <Date />
        <p>Years Months Weeks Days Hours</p>
        <p>Slider</p>
      </header>
    </div>
  );
}

export default App;
