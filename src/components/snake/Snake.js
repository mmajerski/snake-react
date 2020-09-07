import React, { Fragment } from "react";

import "./Snake.css";

const Snake = ({ dots }) => {
  return (
    <Fragment>
      {dots.map(({ x, y }, i) => {
        // check if dot is head
        if (i === dots.length - 1) {
          return (
            <span
              className="dot-head"
              key={i}
              style={{ left: `${x}%`, top: `${y}%` }}
            ></span>
          );
        }
        return (
          <span
            className="dot"
            key={i}
            style={{ left: `${x}%`, top: `${y}%` }}
          ></span>
        );
      })}
    </Fragment>
  );
};

export default Snake;
