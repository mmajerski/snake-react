import { gameOver } from "./gameOver";

export const checkSelfCollision = (dots, setDots, setFood, setDirection) => {
  const head = Object.assign({}, dots[dots.length - 1]); // object reference issues
  const tail = dots.slice(0, dots.length - 1); // all without last one(which is head)
  const found = tail.find(({ x, y }) => x === head.x && y === head.y);
  if (found) {
    gameOver(dots, setDots, setFood, setDirection);
  }
};
