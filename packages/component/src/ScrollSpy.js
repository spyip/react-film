import React from 'react';

import debounce from './debounce';
import memoize from './memoize';

export default class ScrollSpy extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.handlePointerOver = debounce(this.handlePointerOver.bind(this), 300);
    this.handleScroll = this.handleScroll.bind(this);

    this.emitScroll = memoize((initial, fraction, width) => {
      this.props.onScroll && this.props.onScroll({ initial, fraction, width });
    });
  }

  componentDidMount() {
    const { targetRef: { current } = {} } = this.props;

    if (current) {
      current.addEventListener('pointerover', this.handlePointerOver, { passive: true });
      current.addEventListener('scroll', this.handleScroll, { passive: true });
      this.emitInitialScrollEvent(current);
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.targetRef !== this.props.targetRef) {
      const { targetRef: { current: prevCurrent } = {} } = prevProps;
      const { targetRef: { current } = {} } = this.props;

      if (prevCurrent) {
        prevCurrent.removeEventListener('pointerover', this.handlePointerOver);
        prevCurrent.removeEventListener('scroll', this.handleScroll);
      }

      if (current) {
        current.addEventListener('pointerover', this.handlePointerOver, { passive: true });
        current.addEventListener('scroll', this.handleScroll, { passive: true });
        this.emitInitialScrollEvent(current);
      }
    }
  }

  emitInitialScrollEvent(current, waited) {
    if (!waited && current.scrollWidth === current.offsetWidth) {
      // HACK: Chrome 66 will initially say scrollWidth equals to offsetWidth, until some time later
      setTimeout(() => this.emitInitialScrollEvent(current, true));
    }

    this.handleScroll({ target: current }, true);
  }

  componentWillUnmount() {
    const { targetRef: { current } = {} } = this.props;

    current && current.removeEventListener('scroll', this.handleScroll);
  }

  handlePointerOver() {
    // We need to send "onScroll" because "scrollWidth" might have changed
    // For example, the container resized, the scroll width will be incorrect
    // We will debounce to prevent "pointerOver" calculating too often
    // We will memoize to prevent firing unnecessary "onScroll"
    const { targetRef: { current } = {} } = this.props;

    this.handleScroll({ target: current });
  }

  handleScroll({ target }, initial = false) {
    const { offsetWidth, scrollLeft, scrollWidth } = target;

    this.emitScroll(
      initial,
      `${ scrollWidth === offsetWidth ? 0 : scrollLeft / (scrollWidth - offsetWidth) * 100 }%`,
      `${ offsetWidth / scrollWidth * 100 }%`
    );
  }

  render() {
    return false;
  }
}
