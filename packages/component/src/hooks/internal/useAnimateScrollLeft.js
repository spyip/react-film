import { useEffect } from 'react';

function step(from, to, stepper, index) {
  let next = from;

  for (let i = 0; i < index; i++) {
    next = stepper(next, to);
  }

  return next;
}

function squareStepper(current, to) {
  const sign = Math.sign(to - current);
  const step = Math.sqrt(Math.abs(to - current));
  const next = current + step * sign;

  if (sign > 0) {
    return Math.min(to, next);
  } else {
    return Math.max(to, next);
  }
}

export default function useAnimateScrollLeft(element, to, onEnd) {
  useEffect(() => {
    if (element) {
      const start = Date.now();

      let animator;

      const animate = from => {
        animator = requestAnimationFrame(() => {
          let nextValue = step(from, to, squareStepper, (Date.now() - start) / 5);

          if (Math.abs(to - nextValue) < 0.5) {
            nextValue = to;
          }

          element.scrollLeft = nextValue;

          if (to === nextValue) {
            onEnd && onEnd(true);
          } else {
            animate(from);
          }
        });
      };

      animate(element.scrollLeft);

      return () => cancelAnimationFrame(animator);
    }
  }, [element, to, onEnd]);
}
