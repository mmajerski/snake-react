export const doMove = (dots, direction) => {
  if (direction === "down") {
    const { head, tail } = detachHeadFromTail(dots);
    head.y = head.y + 2;

    return [...tail, head];
  } else if (direction === "up") {
    const { head, tail } = detachHeadFromTail(dots);
    head.y = head.y - 2;

    return [...tail, head];
  } else if (direction === "left") {
    const { head, tail } = detachHeadFromTail(dots);
    head.x = head.x - 2;

    return [...tail, head];
  } else {
    const { head, tail } = detachHeadFromTail(dots);
    head.x = head.x + 2;

    return [...tail, head];
  }
};

const detachHeadFromTail = (dots) => {
  const tail = dots.slice(1); // all without first one(will be deleted)
  const head = Object.assign({}, dots[dots.length - 1]); // object reference issues

  return { tail, head };
};
