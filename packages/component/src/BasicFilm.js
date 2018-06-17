import { css } from 'glamor';
import classNames from 'classnames';
import React from 'react';

import Dots from './Dots';
import FilmComposer from './FilmComposer';
import FilmStrip from './FilmStrip';
import Flipper from './Flipper';
import ScrollBar from './ScrollBar';

const SCROLL_BAR_CSS = css({
  bottom: 0,
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
  left: 0,
  transitionProperty: 'left'
}, FLIPPER_CSS);

const RIGHT_FLIPPER_CSS = css({
  right: 0,
  transitionProperty: 'right'
}, FLIPPER_CSS);

const FILM_CSS = css({
  '& > div': {
    overflow: 'hidden',
    position: 'relative'
  }
});

export default props =>
  <FilmComposer>
    <div className={ classNames(FILM_CSS + '', props.className) }>
      <div style={{ height: props.height }}>
        <FilmStrip>
          { props.children }
        </FilmStrip>
        <ScrollBar className={ SCROLL_BAR_CSS + '' } />
        <Flipper className={ LEFT_FLIPPER_CSS + '' } mode="left">
          &lt;
        </Flipper>
        <Flipper className={ RIGHT_FLIPPER_CSS + '' } mode="right">
          &gt;
        </Flipper>
      </div>
      <Dots />
    </div>
  </FilmComposer>
