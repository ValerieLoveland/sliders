import React from "react";
import "./App.css";
import EventItem from "./EventItem";
import Form from "./Form";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Event</p>
        {/* <EventItem eventName={Form.eventName} /> */}
        <p>New Event</p>
        <Form />

        <p>Years Months Weeks Days Hours</p>
        <p>Slider</p>
      </header>
    </div>
  );
}

export default App;
