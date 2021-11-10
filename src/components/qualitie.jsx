import React from "react";

const Qualitie = ({ _id, color, name }) => {
  return (
    <span className={"badge m-1 bg-" + color} key={_id}>
      {name}
    </span>
  );
};

export default Qualitie;
