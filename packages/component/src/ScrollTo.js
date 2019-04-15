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
    const { targetRef: { current } = {} } = this.props;

    if (current) {
      this.addEventListeners(current);
      this.animate('scrollLeft', current.scrollLeft, this.props.scrollLeft, 1);
    }
  }

  componentDidUpdate(prevProps) {
    const { targetRef: { current: prevCurrent } = {} } = prevProps;
    const { targetRef: { current } = {} } = this.props;
    const scrollChanged = prevProps.scrollLeft !== this.props.scrollLeft;
    const targetRefChanged = prevCurrent !== current;

    if (targetRefChanged) {
      this.removeEventListeners(prevCurrent);
      this.addEventListeners(current);
    }

    if ((scrollChanged || targetRefChanged) && current) {
      this.animate('scrollLeft', current.scrollLeft, this.props.scrollLeft, 1);
    }
  }

  componentWillUnmount() {
    const { target: { current } = {} } = this.props;

    this.removeEventListeners(current);
    cancelAnimationFrame(this.animator);
  }

  addEventListeners(current) {
    current && current.addEventListener('pointerdown', this.handleCancelAnimation, { passive: true });
  }

  removeEventListeners(current) {
    current && current.removeEventListener('pointerdown', this.handleCancelAnimation);
  }

  animate(name, from, to, index, start = Date.now()) {
    if (typeof to === 'number') {
      cancelAnimationFrame(this.animator);

      this.animator = requestAnimationFrame(() => {
        const { targetRef: { current } = {} } = this.props;

        if (current) {
          let nextValue = step(from, to, squareStepper, (Date.now() - start) / 5);

          if (Math.abs(to - nextValue) < .5) {
            nextValue = to;
          }

          current[name] = nextValue;

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
