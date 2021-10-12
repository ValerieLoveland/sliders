import React from "react";
import { Card } from "./Card";
import eventName from "./Form";

export const EventItem = (props: any) => {
  return (
    <div>
      hi
      <Card>
        <div>
          {props.name}
          {/* {props.eventDate}
          {props.differenceInDays} */}
        </div>
      </Card>
    </div>
  );
};

export default EventItem;
