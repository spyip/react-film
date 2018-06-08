import React from 'react';

import debounce from './debounce';
import memoize from './memoize';

export default class ScrollSpy extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.handlePointerOver = debounce(this.handlePointerOver.bind(this), 300);
    this.handleScroll = this.handleScroll.bind(this);

    this.emitScroll = memoize((initial, left, width) => {
      this.props.onScroll && this.props.onScroll({ initial, left, width });
    });
  }

  componentDidMount() {
    const { current } = this.props.targetRef;

    if (current) {
      current.addEventListener('pointerover', this.handlePointerOver, { passive: true });
      current.addEventListener('scroll', this.handleScroll, { passive: true });
      this.emitInitialScrollEvent(current);
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.targetRef !== this.props.targetRef) {
      const { current: prev } = prevProps.targetRef;
      const current = this.props.targetRef;

      if (prev) {
        prev.removeEventListener('pointerover', this.handlePointerOver);
        prev.removeEventListener('scroll', this.handleScroll);
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
      // HACK: Chrome 66 is buggy, scrollWidth is initially equals to offsetWidth, we need to wait until scrollWidth has been corrected
      setTimeout(() => this.emitInitialScrollEvent(current, true));
    }

    this.handleScroll({ target: current }, true);
  }

  componentWillUnmount() {
    const { current } = this.props.targetRef;

    current && current.removeEventListener('scroll', this.handleScroll);
  }

  handlePointerOver() {
    // We need to send "onScroll" because "scrollWidth" might have changed
    // We will debounce to prevent "pointerOver" calculating too often
    // We will memoize to prevent firing unnecessary "onScroll"
    const { current } = this.props.targetRef;

    this.handleScroll({ target: current });
  }

  handleScroll({ target }, initial = false) {
    const { offsetWidth, scrollLeft, scrollWidth } = target;

    this.emitScroll(
      initial,
      `${ scrollLeft / scrollWidth * 100 }%`,
      `${ offsetWidth / scrollWidth * 100 }%`
    );
  }

  render() {
    return false;
  }
}
