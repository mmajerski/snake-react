export const checkFoodTouch = (dots, food, direction) => {
  const head = dots[dots.length - 1];
  if (head.x === food[0].x && head.y === food[0].y) {
    let additionalTrailingDot = {};
    let x;
    let y;
    switch (direction) {
      case "up":
        x = dots[0].x;
        y = dots[0].y + 2;
        additionalTrailingDot = { x, y };
        break;
      case "down":
        x = dots[0].x;
        y = dots[0].y - 2;
        additionalTrailingDot = { x, y };
        break;
      case "right":
        x = dots[0].x - 2;
        y = dots[0].y;
        additionalTrailingDot = { x, y };
        break;
      case "left":
        x = dots[0].x + 2;
        y = dots[0].y;
        additionalTrailingDot = { x, y };
        break;
      default:
        break;
    }
    const newFoodPosition = setDotsFreeRandomPosition(dots);
    const newDots = [additionalTrailingDot, ...dots];

    return { newFoodPosition, newDots };
  }

  return false;
};

const setDotsFreeRandomPosition = (dots) => {
  while (true) {
    const randomX = randomEvenInteger(100);
    const randomY = randomEvenInteger(100);
    const found = dots.find((dot) => dot.x === randomX && dot.y === randomY);
    if (!found) {
      return [{ x: randomX, y: randomY }];
    }
  }
};

const randomEvenInteger = (max) =>
  parseInt(Math.floor(Math.random() * max) / 2) * 2;
