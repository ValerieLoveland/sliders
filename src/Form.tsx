import React, { useState } from "react";
import { Card } from "./Card";

export const Form = () => {
  const [eventDate, setEventDate] = useState("");

  const dateChangeHandler = (event: any) => {
    setEventDate(event.target.value);
  };

  return (
    <Card>
      <form>
        <label>
          Event Date:
          <input type="text" value={eventDate} />
        </label>
        <input type="submit" value={eventDate} onChange={dateChangeHandler} />
      </form>
    </Card>
  );
};

export default Form;
