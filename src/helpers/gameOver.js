import {
  INITIAL_DOTS,
  INITIAL_FOOD,
  INITIAL_DIRECTION
} from "../config/initialState";

export const gameOver = (dots, setDots, setFood, setDirection) => {
  console.log(dots.length);
  alert(`Game over! Snake length: ${dots.length}`);
  setDots(INITIAL_DOTS);
  setFood(INITIAL_FOOD);
  setDirection(INITIAL_DIRECTION);
};
