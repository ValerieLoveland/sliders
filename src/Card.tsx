import React from "react";

export const Card: React.FC = (props) => {
  return (
    <div style={{ backgroundColor: "white" }}>
      {/* <div>{props.title}</div> */}
      <div>{props.children}</div>;
    </div>
  );
};
