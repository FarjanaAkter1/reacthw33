import React from "react";

export const List = ({data}) => {
  return (
    <div className="custom">
      {data.map((item, index) => (
        <div key={index} className="custom">{item}</div>
      ))}

    </div>
  );
};
