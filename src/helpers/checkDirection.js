export const checkDirection = (e) => {
  if (e.defaultPrevented) {
    return;
  }

  switch (e.code) {
    case "KeyS":
    case "ArrowDown":
      return "down";
    case "KeyW":
    case "ArrowUp":
      return "up";
    case "KeyA":
    case "ArrowLeft":
      return "left";
    case "KeyD":
    case "ArrowRight":
      return "right";
    default:
      break;
  }
};
