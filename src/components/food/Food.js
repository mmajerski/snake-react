import React, { Fragment } from "react";

import "./Food.css";

const Food = ({ food }) => {
  return (
    <Fragment>
      {food.map(({ x, y }, i) => (
        <span
          className="food"
          key={i}
          style={{ left: `${x}%`, top: `${y}%` }}
        ></span>
      ))}
    </Fragment>
  );
};

export default Food;
