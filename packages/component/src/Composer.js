import React from 'react';

import best from './best';
import Context from './Context';
import ScrollSpy from './ScrollSpy';
import ScrollTo from './ScrollTo';

function getView(current, scrollingTo) {
  if (current) {
    const scrollLeft = scrollingTo || current.scrollLeft;
    const items = current.children;
    const scrollCenter = scrollLeft + current.offsetWidth / 2;
    const index = best([].slice.call(items), item => {
      const offsetCenter = item.offsetLeft + item.offsetWidth / 2;

      return 1 / Math.abs(scrollCenter - offsetCenter);
    });

    if (~index) {
      const item = items[index];
      const offsetCenter = item.offsetLeft + item.offsetWidth / 2;
      let indexFraction = index + (scrollCenter - offsetCenter) / item.offsetWidth;

      // We "fix" indexFraction if the viewport is at the start/end of the content
      // This is to simplify code that use Math.round(indexFraction) to find the current index
      // if (scrollLeft === 0) {
      //   indexFraction = 0;
      // } else if (scrollLeft >= current.scrollWidth - current.offsetWidth) {
      //   indexFraction = items.length - 1;
      // } else if (indexFraction % 1 > .99 || indexFraction % 1 < .01) {
      //   indexFraction = Math.round(indexFraction);
      // }

      if (indexFraction % 1 > .99 || indexFraction % 1 < .01) {
        indexFraction = Math.round(indexFraction);
      }

      let selectedIndex;

      if (scrollLeft === 0) {
        selectedIndex = 0;
      } else if (scrollLeft >= current.scrollWidth - current.offsetWidth) {
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
    const items = current.children;
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
        numItems: 0,
        scrollBarPercentage: '0%',
        scrollBarWidth: '0%',
        scrolling: false,
        scrollTo: scrollTo => {
          this.setState(state => {
            const view = getView(state.filmStrip, state.scrollLeft);

            if (view) {
              const { index, indexFraction } = view;
              const targetIndex = scrollTo({ index, indexFraction });

              if (typeof targetIndex === 'number') {
                return { scrollLeft: getScrollLeft(state.filmStrip, targetIndex) };
              }
            }
          });
        },
        scrollOneLeft: () => {
          this.state.context.scrollTo(({ indexFraction }) => Math.ceil(indexFraction) - 1);
        },
        scrollOneRight: () => {
          this.state.context.scrollTo(({ indexFraction }) => Math.floor(indexFraction) + 1);
        },
        setFilmStripRef: filmStrip => this.setState(() => ({ filmStrip }))
      }
    };
  }

  componentDidUpdate() {
    const { filmStrip } = this.state;

    if (filmStrip && filmStrip.children.length !== this.state.context.numItems) {
      // This is anti-pattern to call setState in componentDidUpdate.
      // But we need to render before we know how many children in the list.
      // So there is a 2-pass render here.

      // Even though we got the filmStrip ref earlier, we cannot use it
      // until componentDidMount or componentDidUpdate
      // https://reactjs.org/docs/refs-and-the-dom.html#callback-refs

      this.setState(({ context }) => ({
        context: {
          ...context,
          numItems: filmStrip.children.length
        }
      }));
    }
  }

  componentWillUnmount() {
    clearTimeout(this.scrollTimeout);
  }

  handleScroll({ fraction: scrollBarPercentage, initial, width: scrollBarWidth }) {
    this.setState(({ context, filmStrip, scrollLeft }) => {
      const view = getView(filmStrip, scrollLeft);

      if (view) {
        const { index, indexFraction } = view;

        return {
          context: {
            ...context,
            index,
            indexFraction,
            scrolling: !initial,
            scrollBarPercentage,
            scrollBarWidth
          }
        };
      }
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
      <Context.Provider value={ state.context }>
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
      </Context.Provider>
    );
  }
}
