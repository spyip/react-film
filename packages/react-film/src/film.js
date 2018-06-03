import { css } from 'glamor';
import classNames from 'classnames';
import React from 'react';
import ReactDOM from 'react-dom';

import ScrollBar from './scrollBar';

const SCROLL_DEBOUNCE = 300;

const SCROLL_BAR_CSS = css({
  bottom: -16,
  transition: 'bottom 300ms 500ms'
});

const ROOT_CSS = css({
  overflow: 'hidden',
  position: 'relative',

  '&:hover, &.scrolling': {
    '& > .flipper': {
      opacity: 1
    },

    [`& .${ SCROLL_BAR_CSS + '' }`]: {
      bottom: 0,
      transition: 'bottom 300ms'
    }
  },

  '& > .strip': {
    height: '100%',
    overflowX: 'scroll',
    overflowY: 'hidden',
    MsOverflowStyle: 'none',
    touchAction: 'pan-x',

    '&::-webkit-scrollbar': {
      display: 'none'
    },

    '& > ul': {
      display: 'flex',
      listStyleType: 'none',
      margin: 0,
      padding: 0
    }
  },

  '& > .flipper': {
    backdropFilter: 'blur(4px)',
    backgroundColor: 'rgba(0, 0, 0, .2)',
    border: 0,
    color: 'White',
    height: '100%',
    opacity: 0,
    position: 'absolute',
    top: 0,
    transition: 'opacity 300ms',
    width: 100,

    '&.left': { left: 0 },
    '&.right': { right: 0 }
  },

  '& > .debug': {
    backgroundColor: 'Red',
    color: 'White',
    left: 0,
    position: 'absolute',
    top: 0
  }
});

export default class Film extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.handleScroll = this.handleScroll.bind(this);
    this.saveStrip = this.saveStrip.bind(this);

    this.state = {
      stripRef: null
    };
  }

  componentWillUnmount() {
    clearTimeout(this.hideScrollBarTimeout);
  }

  handleScroll() {
    this.setState(() => ({ scrolling: true }));

    this.hideScrollBarTimeout = setTimeout(() => {
      this.hideScrollBarTimeout = null;
      this.setState(() => ({ scrolling: false }));
    }, SCROLL_DEBOUNCE);
  }

  saveStrip(ref) {
    this.setState(() => ({ stripRef: ref }));
  }

  render() {
    const { props, state } = this;
    const { scrolling } = state;

    return (
      <div className={ classNames(ROOT_CSS + '', props.className, { scrolling }) }>
        <div className="strip" ref={ this.saveStrip } onScroll={ this.handleScroll }>
          <ul>
            {
              React.Children.map(props.children, child =>
                <li>{ child }</li>
              )
            }
          </ul>
        </div>
        <button className="flipper left">
          { props.leftFlipper || '<' }
        </button>
        <button className="flipper right">
          { props.rightFlipper || '>' }
        </button>
        <ScrollBar
          className={ SCROLL_BAR_CSS + '' }
          target={ this.state.stripRef }
        />
      </div>
    );
  }
}
