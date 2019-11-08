import memoize from 'memoize-one';
import React from 'react';

import best from './best';
import Context from './Context';
import ScrollSpy from './ScrollSpy';
import ScrollTo from './ScrollTo';

const { userAgent } = navigator;
const IS_FIREFOX = /Firefox\//.test(userAgent);
const IS_EDGE_UWP = /Edge\//.test(userAgent);
const IS_CHROME = /Chrome\//.test(userAgent);
const IS_SAFARI = !(IS_CHROME || IS_EDGE_UWP || IS_FIREFOX);

function getView(
  dir,
  { current: scrollable } = {},
  { current: itemContainer } = {},
  scrollingTo
) {
  const rtl = dir === 'rtl';

  if (itemContainer && scrollable) {
    const scrollLeft = scrollingTo || scrollable.scrollLeft;
    const trueScrollLeft =
      rtl ?
        IS_CHROME ?
          scrollLeft - (scrollable.scrollWidth - scrollable.offsetWidth)
        : IS_EDGE_UWP ?
          -scrollLeft
        :
          scrollLeft
      :
        scrollLeft;
    const items = itemContainer.children; // This will enumerate <li> inside <FilmStrip>
    const scrollCenter = trueScrollLeft + scrollable.offsetWidth / 2;
    const index = best([].slice.call(items), item => {
      const offsetCenter = item.offsetLeft + item.offsetWidth / 2;

      return 1 / Math.abs(scrollCenter - offsetCenter);
    });

    if (~index) {
      const item = items[index];

      const offsetCenter = item.offsetLeft + item.offsetWidth / 2;
      let indexFraction = index + (scrollCenter - offsetCenter) / item.offsetWidth * (rtl ? -1 : 1);

      // We "fix" indexFraction if the viewport is at the start/end of the content
      // This is to simplify code that use Math.round(indexFraction) to find the scrollable index
      // if (scrollLeft === 0) {
      //   indexFraction = 0;
      // } else if (scrollLeft >= scrollable.scrollWidth - scrollable.offsetWidth) {
      //   indexFraction = items.length - 1;
      // } else if (indexFraction % 1 > .99 || indexFraction % 1 < .01) {
      //   indexFraction = Math.round(indexFraction);
      // }

      if (indexFraction % 1 > .99 || indexFraction % 1 < .01) {
        indexFraction = Math.round(indexFraction);
      }

      let selectedIndex;

      if (trueScrollLeft === 0) {
        selectedIndex = 0;
      } else if (
        rtl ?
          trueScrollLeft <= scrollable.offsetWidth - scrollable.scrollWidth
        :
          trueScrollLeft >= scrollable.scrollWidth - scrollable.offsetWidth
      ) {
        selectedIndex = items.length - 1;
      } else {
        selectedIndex = Math.round(indexFraction);
      }

      return {
        index: selectedIndex,
        indexFraction
      };
    }
  }
}

function getScrollLeft(
  dir,
  { current: scrollable } = {},
  { current: itemContainer } = {},
  index
) {
  const rtl = dir === 'rtl';

  if (itemContainer && scrollable) {
    const items = itemContainer.children; // This will enumerate <li> inside <FilmStrip>
    const item = items[Math.max(0, Math.min(items.length - 1, index))];

    if (item) {
      if (scrollable.offsetWidth === scrollable.scrollWidth) {
        return 0;
      }

      let result = item.offsetLeft + (item.offsetWidth - scrollable.offsetWidth) / 2;

      if (rtl) {
        result = Math.min(result, 0);
        result = Math.max(result, scrollable.offsetWidth - scrollable.scrollWidth);
      } else {
        result = Math.max(result, 0);
        result = Math.min(result, scrollable.scrollWidth - scrollable.offsetWidth);
      }

      if (rtl) {
        if (IS_CHROME) {
          result += scrollable.scrollWidth - scrollable.offsetWidth;
        } else if (IS_EDGE_UWP) {
          result = -result;
        }
      }
      return result;
    }
  }
}

export default class FilmComposer extends React.Component {
  constructor(props) {
    super(props);

    this.handleScroll = this.handleScroll.bind(this);
    this.handleScrollToEnd = this.handleScrollToEnd.bind(this);

    this.itemContainerRef = React.createRef();
    this.scrollableRef = React.createRef();

    this.mergeContext = memoize((state, dir, numItems = 0) => ({
      ...state,
      dir,
      numItems
    }));

    this.state = {
      context: {
        itemContainerRef: this.itemContainerRef,
        scrollableRef: this.scrollableRef,
        scrollBarPercentage: '0%',
        scrollBarWidth: '0%',
        scrolling: false,
        scrollTo: scrollTo => {
          this.setState(state => {
            const view = getView(this.props.dir, this.scrollableRef, this.itemContainerRef, state.scrollLeft);

            if (view) {
              const { index, indexFraction } = view;
              const targetIndex = scrollTo({ index, indexFraction });

              if (typeof targetIndex === 'number') {
                return { scrollLeft: getScrollLeft(this.props.dir, this.scrollableRef, this.itemContainerRef, targetIndex) };
              }
            }
          });
        },
        scrollOneLeft: () => {
          if (this.props.dir === 'rtl') {
            this.state.context.scrollTo(({ indexFraction }) => Math.floor(indexFraction) + 1);
          } else {
            this.state.context.scrollTo(({ indexFraction }) => Math.ceil(indexFraction) - 1);
          }
        },
        scrollOneRight: () => {
          if (this.props.dir === 'rtl') {
            this.state.context.scrollTo(({ indexFraction }) => Math.ceil(indexFraction) - 1);
          } else {
            this.state.context.scrollTo(({ indexFraction }) => Math.floor(indexFraction) + 1);
          }
        }
      },
      scrollLeft: null
    };
  }

  componentWillUnmount() {
    clearTimeout(this.scrollTimeout);
  }

  handleScroll({
    fraction: scrollBarPercentage,
    initial,
    width: scrollBarWidth
  }) {
    this.setState(({ context, scrollLeft }) => {
      const view = getView(this.props.dir, this.scrollableRef, this.itemContainerRef, scrollLeft);

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
    const {
      props: {
        children,
        dir,
        numItems
      },
      scrollableRef,
      state: {
        context,
        scrollLeft
      }
    } = this;

    return (
      <Context.Provider value={ this.mergeContext(context, dir, numItems) }>
        { children }
        <ScrollSpy
          onScroll={ this.handleScroll }
          targetRef={ scrollableRef }
        />
        {
          typeof scrollLeft === 'number'
          &&
            <ScrollTo
              onEnd={ this.handleScrollToEnd }
              scrollLeft={ scrollLeft }
              targetRef={ scrollableRef }
            />
        }
      </Context.Provider>
    );
  }
}