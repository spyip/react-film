import { css } from 'glamor';
import classNames from 'classnames';
import React from 'react';
import ReactDOM from 'react-dom';

import ScrollBar from './scrollBar';
import ScrollTo from './scrollTo';

const SCROLL_DEBOUNCE = 300;

const SCROLL_BAR_CSS = css({
  bottom: -16,
  transition: 'bottom 300ms 500ms'
});

const ROOT_CSS = css({
  overflow: 'hidden',
  position: 'relative',

  '&:hover, &.scrolling': {
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

    this.handleScroll = this.handleScroll.bind(this);
    this.handleScrollToEnd = this.handleScrollToEnd.bind(this);
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

  componentDidUpdate(prevProps) {
    const { scrollTo } = this.props;

    if (scrollTo !== prevProps.scrollTo && scrollTo) {
      const view = this.getView();

      if (view) {
        const { indexFraction } = view;

        this.setState(() => ({
          scrollLeft: this.getScrollLeft(scrollTo({ indexFraction }))
        }));
      }
    }
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

  handleScroll({ target }) {
    this.setState(() => ({
      scrolling: true
    }));

    this.hideScrollBarTimeout = setTimeout(() => {
      this.hideScrollBarTimeout = null;
      this.setState(() => ({ scrolling: false }));
    }, SCROLL_DEBOUNCE);
  }

  handleScrollToEnd() {
    this.setState(() => ({ scrollLeft: null }));

    this.props.onScrollEnd && this.props.onScrollEnd();
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
        <ScrollBar
          className={ SCROLL_BAR_CSS + '' }
          target={ this.state.stripRef }
        />
        {
          typeof this.state.scrollLeft === 'number' &&
            <ScrollTo
              onEnd={ this.handleScrollToEnd }
              scrollLeft={ this.state.scrollLeft }
              target={ this.state.stripRef }
            />
        }
      </div>
    );
  }
}
