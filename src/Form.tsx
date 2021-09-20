import React, { useState } from "react";
import { Card } from "./Card";
import { EventItem } from "./EventItem";

export const Form = () => {
  const [eventDate, setEventDate] = useState("");
  const [eventName, setEventName] = useState("");
  //const [wholeEvent, setWholeEvent] = useState();

  const eventDateDate = new Date(eventDate);

  // const dateChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {

  // };

  const currentDateDate = new Date();
  const currentDateString = currentDateDate.toLocaleDateString();
  var differenceInTime = currentDateDate.getTime() - eventDateDate.getTime();
  let day = 24 * 60 * 60 * 1000;
  var differenceInDays = Math.ceil(differenceInTime / day);

  const submitHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    setEventDate(event.target.value);
    const eventData = {
      eventName: eventName,
      date: eventDate,
      days: differenceInDays,
    };
    showEvent(eventName, eventDate, differenceInDays);

    //props.onSaveEventData(eventData);
  };

  console.log("time:" + differenceInTime);
  return (
    <>
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

          <p>
            <label>
              Event Name:
              <input
                type="text"
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                  setEventName(event.target.value);
                }}
              />
            </label>
          </p>
          <input type="submit" value="submit" onSubmit={submitHandler} />
        </form>
        <div>{eventName}</div>
        <div>{eventDate}</div>
        <div>{currentDateString}</div>
        {/* <div>{dateConverter}</div> */}
        <div> seconds: {differenceInTime}</div>
        <div>days: {differenceInDays}</div>
      </Card>
    </>
  );
};

export const showEvent = (
  eventName: string,
  eventDate: string,
  differenceInDays: number
) => {
  return (
    <div>
      <div>{eventName}</div>
      <div>{eventDate}</div>
      <div>{differenceInDays}</div>
    </div>
  );
};

export default Form;
