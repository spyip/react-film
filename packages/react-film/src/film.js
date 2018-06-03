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
    WebkitOverflowScrolling: 'touch',

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
    maxWidth: '10%',
    opacity: 0,
    position: 'absolute',
    top: 0,
    transition: 'opacity 300ms',
    width: 100,

    '&.left': { left: 0 },
    '&.right': { right: 0 }
  }
});

function best(array, scorer) {
  return array.reduce((best, item, index) => {
    const score = scorer.call(array, item, index);

    if (score > best.score) {
      return { index, score };
    } else {
      return best;
    }
  }, { index: -1, score: -Infinity }).index;
}

export default class Film extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.handleNextClick = this.handleNextClick.bind(this);
    this.handlePrevClick = this.handlePrevClick.bind(this);
    this.handleScroll = this.handleScroll.bind(this);
    this.saveStrip = this.saveStrip.bind(this);

    this.state = {
      index: -1,
      stripRef: null,
      viewLeft: 0,
      viewWidth: 0
    };
  }

  componentWillUnmount() {
    clearTimeout(this.hideScrollBarTimeout);
  }

  getView() {
    const target = ReactDOM.findDOMNode(this.state.stripRef);

    if (target) {
      const { scrollLeft } = target;
      const items = target.querySelectorAll('ul > li');
      const index = [].findIndex.call(items, item => item.offsetLeft + item.offsetWidth > scrollLeft);

      if (~index) {
        const item = items[index];

        return {
          indexFraction: index + (scrollLeft - item.offsetLeft) / item.offsetWidth,
          items,
          target,
        };
      }
    }
  }

  handleNextClick() {
    const { indexFraction, items, target } = this.getView();

    if (~indexFraction) {
      const nextIndex = Math.floor(indexFraction) + 1;

      if (nextIndex < items.length) {
        target.scrollLeft = items[nextIndex].offsetLeft;
      }
    }
  }

  handlePrevClick() {
    const { indexFraction, items, target } = this.getView();

    if (~indexFraction) {
      const nextIndex = Math.ceil(indexFraction) - 1;

      if (nextIndex >= 0) {
        target.scrollLeft = items[nextIndex].offsetLeft;
      } else {
        target.scrollLeft = 0;
      }
    }
  }

  handleScroll({ target }) {
    this.setState(() => ({
      scrolling: true
    }));

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
        <button
          className="flipper left"
          onClick={ this.handlePrevClick }
        >
          { props.leftFlipper || '<' }
        </button>
        <button
          className="flipper right"
          onClick={ this.handleNextClick }
        >
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
