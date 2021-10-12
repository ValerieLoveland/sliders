import React from "react";
import { Card } from "./Card";
import eventName from "./Form";

export const EventItem = (props: any) => {
  return (
    <div>
      hi
      <Card>
        <div>
          <div>{props.name}</div>
          <div>{props.eventDate}</div>
          <div>{props.differenceInDays}</div>
        </div>
      </Card>
    </div>
  );
};

export default EventItem;
