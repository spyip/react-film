import { css } from 'glamor';
import classNames from 'classnames';
import React from 'react';

import Dots from './Dots';
import FilmContainer from './FilmContainer';
import FilmContext from './FilmContext';
import FilmStrip from './FilmStrip';
import Flipper from './Flipper';
import ScrollBar from './ScrollBar';

const SCROLL_BAR_CSS = css({
  bottom: -30,
  transitionDelay: '1s',
  transitionDuration: '300ms',
  transitionProperty: 'bottom'
});

const FLIPPER_CSS = css({
  position: 'absolute',
  top: 0,
  transitionDelay: '1s',
  transitionDuration: '300ms'
});

const LEFT_FLIPPER_CSS = css({
  left: -50,
  transitionProperty: 'left'
}, FLIPPER_CSS);

const RIGHT_FLIPPER_CSS = css({
  right: -50,
  transitionProperty: 'right'
}, FLIPPER_CSS);

const FILM_CSS = css({
  '& > div': {
    overflow: 'hidden',
    position: 'relative',

    '&:hover, &.scrolling': {
      [`& .${ SCROLL_BAR_CSS + '' }, & .${ LEFT_FLIPPER_CSS + '' }, & .${ RIGHT_FLIPPER_CSS + '' }`]: {
        transitionDelay: '0s'
      },

      [`& .${ SCROLL_BAR_CSS + '' }`]: {
        bottom: 0
      },

      [`& .${ LEFT_FLIPPER_CSS + '' }`]: {
        left: 0
      },

      [`& .${ RIGHT_FLIPPER_CSS + '' }`]: {
        right: 0
      }
    }
  }
});

export default props =>
  <FilmContainer>
    <FilmContext.Consumer>
      { ({ scrolling, scrollBarWidth }) =>
        <div className={ classNames(FILM_CSS + '', props.className) }>
          <div className={ classNames({ scrolling }) } style={{ height: props.height }}>
            <FilmStrip>
              { props.children }
            </FilmStrip>
            {
              scrollBarWidth !== '100%' &&
                <React.Fragment>
                  <ScrollBar className={ SCROLL_BAR_CSS + '' } />
                  <Flipper className={ LEFT_FLIPPER_CSS + '' } mode="left">
                    &lt;
                  </Flipper>
                  <Flipper className={ RIGHT_FLIPPER_CSS + '' } mode="right">
                    &gt;
                  </Flipper>
                </React.Fragment>
            }
          </div>
          {
            scrollBarWidth !== '100%' &&
              <Dots count={ React.Children.count(props.children) } />
          }
        </div>
      }
    </FilmContext.Consumer>
  </FilmContainer>
