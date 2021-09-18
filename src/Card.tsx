import React from "react";

export const Card: React.FC = (props) => {
  return (
    <div style={{ backgroundColor: "white", color: "black" }}>
      {/* <div>{props.title}</div> */}
      <div>{props.children}</div>
    </div>
  );
};
