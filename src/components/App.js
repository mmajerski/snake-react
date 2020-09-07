import React, { useEffect, useState } from "react";

import "semantic-ui-css/semantic.min.css";

import Snake from "./snake/Snake";
import Food from "./food/Food";
import ControlBtns from "./buttons/ControlBtns";
import { checkDirection } from "../helpers/checkDirection";
import { checkBoundaries } from "../helpers/checkBoundaries";
import { checkFoodTouch } from "../helpers/checkFoodTouch";
import { doMove } from "../helpers/doMove";
import { checkSelfCollision } from "../helpers/checkSelfCollision";

import {
  INITIAL_DOTS,
  INITIAL_FOOD,
  INITIAL_DIRECTION,
  INITIAL_SPEED
} from "../config/initialState";

import "./App.css";

const App = () => {
  const [dots, setDots] = useState(INITIAL_DOTS);
  const [food, setFood] = useState(INITIAL_FOOD);
  const [direction, setDirection] = useState(INITIAL_DIRECTION);

  useEffect(() => {
    const interval = setInterval(() => {
      checkBoundaries(dots, direction);
      setDots(doMove(dots, direction));
      checkSelfCollision(dots, setDots, setFood, setDirection);
      const foodChecked = checkFoodTouch(dots, food, direction);
      if (foodChecked) {
        const { newFoodPosition, newDots } = foodChecked;

        setFood(newFoodPosition);
        setDots(newDots);
      }
    }, INITIAL_SPEED);
    return () => clearInterval(interval);
  });

  document.addEventListener("keydown", (e) => {
    setDirection(checkDirection(e));
  });

  return (
    <div className="wrapper">
      <div className="container-game">
        <Snake dots={dots} />
        <Food food={food} />
      </div>
      <ControlBtns setDirection={setDirection} />
    </div>
  );
};

export default App;
