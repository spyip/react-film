import { css } from 'glamor';
import classNames from 'classnames';
import React from 'react';
import ReactDOM from 'react-dom';

import ScrollBar from './scrollBar';
import ScrollSpy from './scrollSpy';

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
      backdropFilter: 'blur(4px)',
      opacity: 1,
      transition: 'opacity 300ms'
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
    backdropFilter: 'blur(0px)',
    backgroundColor: 'rgba(255, 255, 255, .2)',
    border: 0,
    color: 'White',
    height: '100%',
    maxWidth: '10%',
    opacity: 0,
    outline: 0,
    position: 'absolute',
    top: 0,
    touchAction: 'none',
    transition: 'backdrop-filter 300ms, opacity 300ms',
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
    this.handleScrollFinish = this.handleScrollFinish.bind(this);
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
      const scrollLeft = this.state.scrollLeft || target.scrollLeft;
      const items = target.querySelectorAll('ul > li');
      const scrollCenter = scrollLeft + target.offsetWidth / 2;
      const index = best([].slice.call(items), item => {
        const offsetCenter = item.offsetLeft + item.offsetWidth / 2;

        return 1 / Math.abs(scrollCenter - offsetCenter);
      });

      if (~index) {
        const item = items[index];
        const offsetCenter = item.offsetLeft + item.offsetWidth / 2;

        return {
          indexFraction: index + (scrollCenter - offsetCenter) / item.offsetWidth,
          items,
          target
        };
      }
    }
  }

  getScrollLeft(index) {
    const target = ReactDOM.findDOMNode(this.state.stripRef);

    if (target) {
      const items = target.querySelectorAll('ul > li');
      const item = items[Math.max(0, Math.min(items.length - 1, index))];

      if (item) {
        const itemOffsetCenter = item.offsetLeft + item.offsetWidth / 2;

        return itemOffsetCenter - target.offsetWidth / 2;
      }
    }
  }

  handleNextClick() {
    const { indexFraction, itemOffsetCenter, items, target: { offsetWidth } } = this.getView();

    if (~indexFraction) {
      const nextIndex = Math.floor(indexFraction) + 1;

      this.setState(() => ({ scrollLeft: this.getScrollLeft(nextIndex) }));
    }
  }

  handlePrevClick() {
    const { indexFraction, items, target: { offsetWidth } } = this.getView();

    if (~indexFraction) {
      const nextIndex = Math.ceil(indexFraction) - 1;

      this.setState(() => ({ scrollLeft: this.getScrollLeft(nextIndex) }));
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

  handleScrollFinish() {
    this.setState(() => ({ scrollLeft: null }));
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
              React.Children.map(props.children, child => <li>{ child }</li>)
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
        <ScrollSpy
          onFinish={ this.handleScrollFinish }
          scrollLeft={ this.state.scrollLeft }
          target={ this.state.stripRef }
        />
      </div>
    );
  }
}
