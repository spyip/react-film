import React from 'react';

import best from './best';
import FilmContext from './FilmContext';
import ScrollSpy from './ScrollSpy';
import ScrollTo from './ScrollTo';

function getView(current, scrollingTo) {
  if (current) {
    const scrollLeft = scrollingTo || current.scrollLeft;
    const items = current.querySelectorAll('ul > li');
    const scrollCenter = scrollLeft + current.offsetWidth / 2;
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

      if (scrollCenter <= current.offsetWidth / 2) {
        selectedIndex = 0;
      } else if (scrollCenter >= current.scrollWidth - current.offsetWidth / 2) {
        selectedIndex = items.length - 1;
      } else {
        selectedIndex = Math.round(indexFraction);
      }

      return {
        index: selectedIndex,
        indexFraction,
        items,
        current
      };
    }
  }
}

function getScrollLeft(current, index) {
  if (current) {
    const items = current.querySelectorAll('ul > li');
    const item = items[Math.max(0, Math.min(items.length - 1, index))];

    if (item) {
      const itemOffsetCenter = item.offsetLeft + item.offsetWidth / 2;

      return itemOffsetCenter - current.offsetWidth / 2;
    }
  }
}

export default class FilmComposer extends React.Component {
  constructor(props) {
    super(props);

    this.handleScroll = this.handleScroll.bind(this);
    this.handleScrollToEnd = this.handleScrollToEnd.bind(this);

    this.state = {
      filmStrip: null,
      scrollLeft: null,
      context: {
        _setFilmStripRef: filmStrip => this.setState(() => ({ filmStrip })),
        _setNumItems: numItems => {
          this.setState(({ context }) => ({
            context: {
              ...context,
              numItems
           }
          }));
        },
        numItems: 0,
        scrollBarLeft: '0%',
        scrollBarWidth: '0%',
        scrolling: false,
        scrollTo: scrollTo => {
          this.setState(state => {
            const view = getView(state.filmStrip, state.scrollLeft);

            if (view) {
              const { indexFraction } = view;

              return { scrollLeft: getScrollLeft(state.filmStrip, scrollTo({ indexFraction })) };
            }
          });
        },
        scrollOneLeft: () => {
          this.state.context.scrollTo(({ indexFraction }) => Math.ceil(indexFraction) - 1);
        },
        scrollToRight: () => {
          this.state.context.scrollTo(({ indexFraction }) => Math.floor(indexFraction) + 1);
        }
      }
    };
  }

  handleScroll({ initial, left: scrollBarLeft, width: scrollBarWidth }) {
    this.setState(({ context, filmStrip, scrollLeft }) => {
      const { index, indexFraction } = getView(filmStrip, scrollLeft);

      return {
        context: {
          ...context,
          index,
          indexFraction,
          scrolling: !initial,
          scrollBarLeft,
          scrollBarWidth
        }
      };
    });

    if (!initial) {
      clearTimeout(this.scrollTimeout);
      this.scrollTimeout = setTimeout(() => {
        this.setState(({ context }) => ({
          context: {
            ...context,
            scrolling: false
          }
        }));
      }, 500);
    }
  }

  handleScrollToEnd() {
    this.setState(() => ({ scrollLeft: null }));
  }

  render() {
    const { state } = this;

    return (
      <FilmContext.Provider value={ state.context }>
        { this.props.children }
        {
          !!state.filmStrip &&
            <ScrollSpy
              onScroll={ this.handleScroll }
              target={ state.filmStrip }
            />
        }
        {
          typeof state.scrollLeft === 'number'
          && !!state.filmStrip
          &&
            <ScrollTo
              onEnd={ this.handleScrollToEnd }
              scrollLeft={ state.scrollLeft }
              target={ state.filmStrip }
            />
        }
      </FilmContext.Provider>
    );
  }
}
