import React from "react";
import { Button } from "semantic-ui-react";

import "./ControlBtns.css";

const ControlBtns = ({ setDirection }) => {
  const handleClickBtn = (direction) => {
    setDirection(direction);
  };

  return (
    <div className="btns-group">
      <Button
        className="up-btn"
        labelPosition="right"
        icon="up chevron"
        content="Up"
        onClick={() => handleClickBtn("up")}
      />
      <Button
        className="left-btn"
        labelPosition="left"
        icon="left chevron"
        content="Left"
        onClick={() => handleClickBtn("left")}
      />
      <Button
        className="right-btn"
        labelPosition="right"
        icon="right chevron"
        content="Right"
        onClick={() => handleClickBtn("right")}
      />
      <Button
        className="down-btn"
        labelPosition="right"
        icon="down chevron"
        content="Down"
        onClick={() => handleClickBtn("down")}
      />
    </div>
  );
};

export default ControlBtns;
