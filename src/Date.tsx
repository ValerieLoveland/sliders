import { Form } from "./Form";

export const DateOfEvent: React.FC = (props: any) => {
  const date = props.eventDate;
  return <Form {...date} />;
};
