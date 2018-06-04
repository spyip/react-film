import { css } from 'glamor';
import classNames from 'classnames';
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
      this.handleScroll({ target: target });
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.target !== this.props.target) {
      const prevTarget = ReactDOM.findDOMNode(prevProps.target);
      const target = ReactDOM.findDOMNode(this.props.target);

      prevTarget && prevTarget.removeEventListener('scroll', this.handleScroll);
      target && target.addEventListener('scroll', this.handleScroll, { passive: true });
    }
  }

  componentWillUnmount() {
    const target = ReactDOM.findDOMNode(this.props.target);

    target && target.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll({ target, type }) {
    const { offsetWidth, scrollLeft, scrollWidth } = target;

    this.props.onScroll && this.props.onScroll({
      left: `${ scrollLeft / scrollWidth * 100 }%`,
      width: `${ offsetWidth / scrollWidth * 100 }%`
    });
  }

  render() {
    return false;
  }
}
