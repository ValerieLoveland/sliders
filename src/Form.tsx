import React, { useState } from "react";
import { Card } from "./Card";
import { EventItem } from "./EventItem";

export const Form = () => {
  const [eventDate, setEventDate] = useState("");
  const [DateInputText, setDateInputText] = useState("");

  const [NameInputText, setNameInputText] = useState("");
  const [eventName, setEventName] = useState("");

  const eventDateDate = new Date(eventDate);

  const currentDateDate = new Date();
  const currentDateString = currentDateDate.toLocaleDateString();
  var differenceInTime = currentDateDate.getTime() - eventDateDate.getTime();
  let day = 24 * 60 * 60 * 1000;
  var differenceInDays = Math.ceil(differenceInTime / day);

  const handleNameChange = (event: any) => {
    const newName = event?.target.value;
    setNameInputText(newName);
  };

  const handleDateChange = (event: any) => {
    const newDate = event?.target.value;
    setDateInputText(newDate);
  };

  const addItem = (event: any) => {
    event.preventDefault();
    setEventDate(event.target.value);
    setEventName(event.target.value);
    // const eventData = {
    //   eventName: eventName,
    //   date: eventDate,
    //   days: differenceInDays,
  };
  <ShowEvent differenceInDays={differenceInDays} />;
  // return (
  //   <>
  //     <div>{eventName}</div>
  //     <div>{eventDate}</div>
  //     <div>{eventName}</div>
  //   </>
  // );

  return (
    <>
      <div>
        <EventItem
          name={eventName}
          differenceInDays={differenceInDays}
          eventDate={eventDate}
        />
      </div>
      <Card>
        <form>
          <label>
            Event Date:
            <input
              type="text"
              onChange={handleDateChange}
              value={DateInputText}
            />
          </label>

          <p>
            <label>
              Event Name:
              <input
                onChange={handleNameChange}
                type="text"
                value={NameInputText}
              />
            </label>
          </p>
          <button onClick={addItem}>
            <span>Add Event</span>
          </button>
        </form>
        <ShowEvent />
      </Card>
    </>
  );
};

export const ShowEvent = (props: any) => {
  return (
    <div>
      <div>{props.differenceInDays}</div>
    </div>
  );
};

export default Form;
