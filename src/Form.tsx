import React, { useState } from "react";
import { Card } from "./Card";

export const Form = () => {
  const [eventDate, setEventDate] = useState("");

  const eventDateDate = new Date(eventDate);

  const dateChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEventDate(event.target.value);
  };

  const currentDateDate = new Date();
  const currentDateString = currentDateDate.toLocaleDateString();
  var differenceInTime = currentDateDate.getTime() - eventDateDate.getTime();
  let day = 24 * 60 * 60 * 1000;
  var differenceInDays = Math.ceil(differenceInTime / day);

  console.log("time:" + differenceInTime);
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
      <div>{currentDateString}</div>
      {/* <div>{dateConverter}</div> */}
      <div> seconds: {differenceInTime}</div>
      <div>days: {differenceInDays}</div>
    </Card>
  );
};

export const dateConverter = () => {};

export default Form;
