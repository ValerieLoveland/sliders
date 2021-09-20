import React from "react";
import { Card } from "./Card";
import Form from "./Form";

export const EventItem = (props: any) => {
  return (
    <div>
      <Card>
        <div>{props.name}</div>
        <div>{props.date}</div>
        <div>{props.days}</div>
      </Card>
    </div>
  );
};

export default EventItem;
