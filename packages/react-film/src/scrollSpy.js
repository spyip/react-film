import React from 'react';
import ReactDOM from 'react-dom';

export default class ScrollSpy extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    const target = ReactDOM.findDOMNode(this.props.target);

    if (target) {
      target.addEventListener('scroll', this.handleScroll, { passive: true });

      if (target.scrollWidth === target.offsetWidth) {
        // HACK: Chrome 66 is buggy, scrollWidth is initially equals to offsetWidth, we need to wait until scrollWidth has been corrected
        setTimeout(() => this.handleScroll({ target }, true), 0);
      } else {
        this.handleScroll({ target }, true);
      }
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.target !== this.props.target) {
      const prevTarget = ReactDOM.findDOMNode(prevProps.target);
      const target = ReactDOM.findDOMNode(this.props.target);

      prevTarget && prevTarget.removeEventListener('scroll', this.handleScroll);

      if (target) {
        target.addEventListener('scroll', this.handleScroll, { passive: true });

        if (target.scrollWidth === target.offsetWidth) {
          // HACK: Chrome 66 is buggy, scrollWidth is initially equals to offsetWidth, we need to wait until scrollWidth has been corrected
          setTimeout(() => this.handleScroll({ target }, true), 0);
        } else {
          this.handleScroll({ target }, true);
        }
      }
    }
  }

  componentWillUnmount() {
    const target = ReactDOM.findDOMNode(this.props.target);

    target && target.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll({ target }, initial = false) {
    const { offsetWidth, scrollLeft, scrollWidth } = target;

    this.props.onScroll && this.props.onScroll({
      initial,
      left: `${ scrollLeft / scrollWidth * 100 }%`,
      width: `${ offsetWidth / scrollWidth * 100 }%`
    });
  }

  render() {
    return false;
  }
}
