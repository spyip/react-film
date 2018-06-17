import React from 'react';

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

export default class ScrollTo extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.handleCancelAnimation = this.handleCancelAnimation.bind(this);
  }

  componentDidMount() {
    const { target } = this.props;

    if (target) {
      this.addEventListeners(target);
      this.animate('scrollLeft', target.scrollLeft, this.props.scrollLeft, 1);
    }
  }

  componentDidUpdate(prevProps) {
    const scrollChanged = prevProps.scrollLeft !== this.props.scrollLeft;
    const targetChanged = prevProps.target !== this.props.target;

    if (targetChanged) {
      this.removeEventListeners(prevProps.target);
      this.addEventListeners(this.props.target);
    }

    if ((scrollChanged || targetChanged) && this.props.target) {
      this.animate('scrollLeft', this.props.target.scrollLeft, this.props.scrollLeft, 1);
    }
  }

  componentWillUnmount() {
    this.removeEventListeners(this.props.target);
    cancelAnimationFrame(this.animator);
  }

  addEventListeners(target) {
    target && target.addEventListener('pointerdown', this.handleCancelAnimation, { passive: true });
  }

  removeEventListeners(target) {
    target && target.removeEventListener('pointerdown', this.handleCancelAnimation);
  }

  animate(name, from, to, index, start = Date.now()) {
    if (typeof to === 'number') {
      cancelAnimationFrame(this.animator);

      this.animator = requestAnimationFrame(() => {
        const { target } = this.props;

        if (target) {
          let nextValue = step(from, to, squareStepper, (Date.now() - start) / 5);

          if (Math.abs(to - nextValue) < .5) {
            nextValue = to;
          }

          target[name] = nextValue;

          if (to === nextValue) {
            this.props.onEnd && this.props.onEnd(true);
          } else {
            this.animate(name, from, to, index + 1, start);
          }
        }
      });
    }
  }

  handleCancelAnimation() {
    cancelAnimationFrame(this.animator);
    this.props.onEnd && this.props.onEnd(false);
  }

  render() {
    return false;
  }
}
