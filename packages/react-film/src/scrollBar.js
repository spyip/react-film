import { css } from 'glamor';
import classNames from 'classnames';
import React from 'react';
import ReactDOM from 'react-dom';

const SCROLL_BAR_HEIGHT = 16;
const SCROLL_BAR_PADDING = 4;

const ROOT_CSS = css({
  bottom: 0,
  boxSizing: 'border-box',
  height: SCROLL_BAR_HEIGHT,
  padding: SCROLL_BAR_PADDING,
  position: 'absolute',
  width: '100%',

  '& > .handler': {
    backdropFilter: 'blur(4px)',
    background: 'rgba(255, 255, 255, .4)',
    borderRadius: SCROLL_BAR_HEIGHT / 2,
    height: SCROLL_BAR_HEIGHT - SCROLL_BAR_PADDING * 2
  }
});

const ActualScrollBar = ({ className, offsetWidth, scrollLeft, scrollWidth }) =>
  <div className={ classNames(ROOT_CSS + '', className) }>
    <div
      className="handler"
      style={{
        marginLeft: `${ scrollLeft / scrollWidth * 100 }%`,
        width: `${ offsetWidth / scrollWidth * 100 }%`
      }}
    />
  </div>

export default class ScrollBar extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.handleScroll = this.handleScroll.bind(this);

    this.state = {
      offsetWidth: 0,
      scrollLeft: 0,
      scrollWidth: 0
    };
  }

  componentDidMount() {
    const target = ReactDOM.findDOMNode(this.props.target);

    if (target) {
      target.addEventListener('scroll', this.handleScroll, { passive: true });
      this.handleScroll({ target: target });
    }
  }

  componentDidUpdate(prevProps) {
    const prevTarget = ReactDOM.findDOMNode(prevProps.target);
    const target = ReactDOM.findDOMNode(this.props.target);

    prevTarget && prevTarget.removeEventListener('scroll', this.handleScroll);
    target && target.addEventListener('scroll', this.handleScroll, { passive: true });
  }

  componentWillUnmount() {
    const target = ReactDOM.findDOMNode(this.props.target);

    target && target.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll({ target, type }) {
    const { offsetWidth, scrollLeft, scrollWidth } = target;

    this.setState(() => ({
      offsetWidth,
      scrollLeft,
      scrollWidth
    }));
  }

  render() {
    const { className } = this.props;
    const { offsetWidth, scrollLeft, scrollWidth } = this.state;

    return (
      <ActualScrollBar
        className={ className }
        offsetWidth={ offsetWidth }
        scrollLeft={ scrollLeft }
        scrollWidth={ scrollWidth }
      />
    );
  }
}
