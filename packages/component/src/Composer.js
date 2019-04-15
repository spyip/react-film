import React from 'react';

import best from './best';
import Context from './Context';
import InternalContext from './InternalContext';
import ScrollSpy from './ScrollSpy';
import ScrollTo from './ScrollTo';

function getView(
  { current: scrollable } = {},
  { current: itemContainer } = {},
  scrollingTo
) {
  if (itemContainer && scrollable) {
    const scrollLeft = scrollingTo || scrollable.scrollLeft;
    const items = itemContainer.children; // This will enumerate <li> inside <FilmStrip>
    const scrollCenter = scrollLeft + scrollable.offsetWidth / 2;
    const index = best([...items], item => {
      const offsetCenter = item.offsetLeft + item.offsetWidth / 2;

      return 1 / Math.abs(scrollCenter - offsetCenter);
    });

    if (~index) {
      const item = items[index];
      const offsetCenter = item.offsetLeft + item.offsetWidth / 2;
      let indexFraction = index + (scrollCenter - offsetCenter) / item.offsetWidth;

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

      if (scrollLeft === 0) {
        selectedIndex = 0;
      } else if (scrollLeft >= scrollable.scrollWidth - scrollable.offsetWidth) {
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
  { current: scrollable } = {},
  { current: itemContainer } = {},
  index
) {
  if (itemContainer && scrollable) {
    const items = itemContainer.children; // This will enumerate <li> inside <FilmStrip>
    const item = items[Math.max(0, Math.min(items.length - 1, index))];

    if (item) {
      const itemOffsetCenter = item.offsetLeft + item.offsetWidth / 2;

      return itemOffsetCenter - scrollable.offsetWidth / 2;
    }
  }
}

export default class FilmComposer extends React.Component {
  constructor(props) {
    super(props);

    this.handleScroll = this.handleScroll.bind(this);
    this.handleScrollToEnd = this.handleScrollToEnd.bind(this);

    // TODO: How about Composer prepare createRef()?

    this.state = {
      itemContainerRef: props.itemContainerRef,
      scrollableRef: props.scrollableRef,
      scrollLeft: null,
      context: {
        numItems: 0,
        scrollBarPercentage: '0%',
        scrollBarWidth: '0%',
        scrolling: false,
        scrollTo: scrollTo => {
          this.setState(state => {
            const view = getView(state.scrollableRef, state.itemContainerRef, state.scrollLeft);

            if (view) {
              const { index, indexFraction } = view;
              const targetIndex = scrollTo({ index, indexFraction });

              if (typeof targetIndex === 'number') {
                return { scrollLeft: getScrollLeft(state.scrollableRef, state.itemContainerRef, targetIndex) };
              }
            }
          });
        },
        scrollOneLeft: () => {
          this.state.context.scrollTo(({ indexFraction }) => Math.ceil(indexFraction) - 1);
        },
        scrollOneRight: () => {
          this.state.context.scrollTo(({ indexFraction }) => Math.floor(indexFraction) + 1);
        }
      },
      internalContext: {
        _setNumItems: numItems => {
          this.setState(({ context }) => ({
            context: {
              ...context,
              numItems
            }
          }));
        }
      }
    };
  }

  componentWillReceiveProps({ itemContainerRef, scrollableRef }) {
    if (
      itemContainerRef !== this.props.itemContainerRef
      || scrollableRef !== this.props.scrollableRef
    ) {
      this.setState(() => ({
        itemContainerRef,
        scrollableRef
      }));
    }
  }

  componentWillUnmount() {
    clearTimeout(this.scrollTimeout);
  }

  handleScroll({ fraction: scrollBarPercentage, initial, width: scrollBarWidth }) {
    this.setState(({ context, itemContainerRef, scrollableRef, scrollLeft }) => {
      const view = getView(scrollableRef, itemContainerRef, scrollLeft);

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
      <InternalContext.Provider value={ state.internalContext }>
        <Context.Provider value={ state.context }>
          { this.props.children }
          {
            !!state.scrollableRef &&
              <ScrollSpy
                onScroll={ this.handleScroll }
                targetRef={ state.scrollableRef }
              />
          }
          {
            typeof state.scrollLeft === 'number'
            && !!state.scrollableRef
            &&
              <ScrollTo
                onEnd={ this.handleScrollToEnd }
                scrollLeft={ state.scrollLeft }
                targetRef={ state.scrollableRef }
              />
          }
        </Context.Provider>
      </InternalContext.Provider>
    );
  }
}
