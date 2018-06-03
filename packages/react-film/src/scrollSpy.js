import { css } from 'glamor';
import classNames from 'classnames';
import React from 'react';
import ReactDOM from 'react-dom';

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

export default class ScrollSpy extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.handleCancelAnimation = this.handleCancelAnimation.bind(this);
  }

  componentDidMount() {
    this.addEventListeners(ReactDOM.findDOMNode(this.props.target));
  }

  componentDidUpdate(prevProps) {
    if (prevProps.target !== this.props.target) {
      this.removeEventListeners(ReactDOM.findDOMNode(prevProps.target));
      this.addEventListeners(ReactDOM.findDOMNode(this.props.target));
    }

    if (prevProps.scrollLeft !== this.props.scrollLeft) {
      const targetElement = ReactDOM.findDOMNode(this.props.target);

      this.animate('scrollLeft', targetElement.scrollLeft, this.props.scrollLeft, 1);
    }
  }

  componentWillUnmount() {
    this.removeEventListeners(ReactDOM.findDOMNode(this.props.target));
    cancelAnimationFrame(this.animator);
  }

  addEventListeners(element) {
    element && element.addEventListener('pointerdown', this.handleCancelAnimation, { passive: true });
  }

  removeEventListeners(element) {
    element && element.removeEventListener('pointerdown', this.handleCancelAnimation);
  }

  animate(name, from, to, index, start = Date.now()) {
    if (typeof to === 'number') {
      this.animator = requestAnimationFrame(() => {
        const now = Date.now();
        const element = ReactDOM.findDOMNode(this.props.target);

        if (element) {
          const nextValue = step(from, to, squareStepper, (now - start) / 5);

          element[name] = nextValue;

          if (to === nextValue) {
            this.props.onFinish && this.props.onFinish(true);
          } else {
            this.animate(name, from, to, index + 1, start);
          }
        }
      });
    }
  }

  handleCancelAnimation() {
    cancelAnimationFrame(this.animator);
    this.props.onFinish && this.props.onFinish(false);
  }

  render() {
    return false;
  }
}
