export const checkBoundaries = (dots) => {
  dots.map((dot) => {
    if (dot.x < 0) {
      dot.x = 100;
    } else if (dot.x > 98) {
      dot.x = 0;
    }
    if (dot.y < 0) {
      dot.y = 100;
    } else if (dot.y > 98) {
      dot.y = 0;
    }

    return dot;
  });
};
