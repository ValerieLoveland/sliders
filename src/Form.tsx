import React, { useState } from "react";
import { Card } from "./Card";

export const Form = () => {
  const [eventDate, setEventDate] = useState("");

  const dateChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEventDate(event.target.value);
  };

  return (
    <Card>
      <form>
        <label>
          Event Date:
          <input
            type="text"
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              setEventDate(event.target.value);
            }}
          />
        </label>
        <input type="submit" value="submit" onSubmit={dateChangeHandler} />
      </form>
      <div>{eventDate}</div>
      <div>{currentDate}</div>
    </Card>
  );
};

const currentDate = new Date().toLocaleDateString("en-US", {
  day: "numeric",
  month: "numeric",
  year: "numeric",
});

export default Form;
