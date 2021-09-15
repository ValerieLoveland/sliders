import React from "react";
import "./App.css";
import { DateOfEvent } from "./Date";
import Form from "./Form";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Event</p>
        {/* <Form /> */}
        <DateOfEvent />
        <p>Years Months Weeks Days Hours</p>
        <p>Slider</p>
      </header>
    </div>
  );
}

export default App;
