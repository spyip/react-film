import React from 'react';
import ReactDOM from 'react-dom';

import best from './best';
import FilmContext from './FilmContext';
import ScrollSpy from './ScrollSpy';
import ScrollTo from './ScrollTo';

function getView(stripRef, scrollingTo) {
  const target = ReactDOM.findDOMNode(stripRef);

  if (target) {
    const scrollLeft = scrollingTo || target.scrollLeft;
    const items = target.querySelectorAll('ul > li');
    const scrollCenter = scrollLeft + target.offsetWidth / 2;
    const index = best([].slice.call(items), item => {
      const offsetCenter = item.offsetLeft + item.offsetWidth / 2;

      return 1 / Math.abs(scrollCenter - offsetCenter);
    });

    if (~index) {
      const item = items[index];
      const offsetCenter = item.offsetLeft + item.offsetWidth / 2;
      let indexFraction = index + (scrollCenter - offsetCenter) / item.offsetWidth;

      if (indexFraction % 1 > .99 || indexFraction % 1 < .01) {
        indexFraction = Math.round(indexFraction);
      }

      let selectedIndex;

      if (scrollCenter <= target.offsetWidth / 2) {
        selectedIndex = 0;
      } else if (scrollCenter >= target.scrollWidth - target.offsetWidth / 2) {
        selectedIndex = items.length - 1;
      } else {
        selectedIndex = Math.round(indexFraction);
      }

      return {
        index: selectedIndex,
        indexFraction,
        items,
        target
      };
    }
  }
}

function getScrollLeft(stripRef, index) {
  const target = ReactDOM.findDOMNode(stripRef);

  if (target) {
    const items = target.querySelectorAll('ul > li');
    const item = items[Math.max(0, Math.min(items.length - 1, index))];

    if (item) {
      const itemOffsetCenter = item.offsetLeft + item.offsetWidth / 2;

      return itemOffsetCenter - target.offsetWidth / 2;
    }
  }
}

export default class FilmContainer extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.handleScroll = this.handleScroll.bind(this);
    this.handleScrollToEnd = this.handleScrollToEnd.bind(this);

    this.state = {
      saveStripRef: stripRef => this.setState(() => ({ stripRef })),
      scrollBarLeft: '0%',
      scrollBarWidth: '0%',
      scrolling: false,
      scrollLeft: null,
      scrollTo: scrollTo => {
        this.setState(state => {
          const view = getView(state.stripRef, state.scrollLeft);

          if (view) {
            const { indexFraction } = view;

            return { scrollLeft: getScrollLeft(state.stripRef, scrollTo({ indexFraction })) };
          }
        });
      },
      scrollToLeft: () => {
        this.state.scrollTo(({ indexFraction }) => Math.ceil(indexFraction) - 1);
      },
      scrollToRight: () => {
        this.state.scrollTo(({ indexFraction }) => Math.floor(indexFraction) + 1);
      },
      stripRef: null
    };
  }

  handleScroll({ initial, left: scrollBarLeft, width: scrollBarWidth }) {
    const { index, indexFraction } = getView(this.state.stripRef, this.state.scrollLeft);

    this.setState(() => ({
      index,
      indexFraction,
      scrolling: !initial,
      scrollBarLeft,
      scrollBarWidth
    }));

    if (!initial) {
      clearTimeout(this.scrollTimeout);
      this.scrollTimeout = setTimeout(() => this.setState(() => ({ scrolling: false })), 500);
    }
  }

  handleScrollToEnd() {
    this.setState(() => ({ scrollLeft: null }));
  }

  render() {
    const { state } = this;

    return (
      <FilmContext.Provider value={ state }>
        { this.props.children }
        {
          !!state.stripRef &&
            <ScrollSpy
              onScroll={ this.handleScroll }
              target={ state.stripRef }
            />
        }
        {
          typeof state.scrollLeft === 'number'
          && !!state.stripRef
          &&
            <ScrollTo
              onEnd={ this.handleScrollToEnd }
              scrollLeft={ state.scrollLeft }
              target={ state.stripRef }
            />
        }
      </FilmContext.Provider>
    );
  }
}
