import { css } from 'glamor';
import classNames from 'classnames';
import React from 'react';

import Context from './Context';

const ROOT_CSS = css({
  MsOverflowStyle: 'none',
  overflowX: 'scroll',
  overflowY: 'hidden',
  touchAction: 'manipulation',
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
});

export default ({
  children,
  className
}) =>
  <Context.Consumer>
    { ({ itemContainerRef, scrollableRef }) =>
      <div
        className={ classNames(ROOT_CSS + '', className) }
        ref={ scrollableRef }
      >
        <ul ref={ itemContainerRef }>
          { React.Children.map(children, child => <li>{ child }</li>) }
        </ul>
      </div>
    }
  </Context.Consumer>
