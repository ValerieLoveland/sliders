import React from "react";
import { Card } from "./Card";
import { Form } from "./Form";

export const EventItem = (props: any) => {
  return (
    <div>
      <Card>
        <Form {...props.eventName} />
      </Card>
    </div>
  );
};

export default EventItem;
