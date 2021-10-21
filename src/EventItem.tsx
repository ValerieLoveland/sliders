import React from "react";
import { Card } from "./Card";
import eventName from "./Form";

export const EventItem = (props: any) => {
  return (
    <div>
      <Card>
        hi
        <div>
          <div>Event name: {props.eventName}</div>
          <div>Date of event: {props.eventDate}</div>
          <div>{props.differenceInDays} days</div>
        </div>
      </Card>
    </div>
  );
};

export default EventItem;
