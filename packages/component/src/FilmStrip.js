import { css } from 'glamor';
import classNames from 'classnames';
import React from 'react';

import CallFunction from './CallFunction';
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

export default props =>
  <Context.Consumer>
    { context =>
      <React.Fragment>
        <div
          className={ classNames(ROOT_CSS + '', props.className) }
          ref={ context._setFilmStripRef }
        >
          <ul>
            { React.Children.map(props.children, child => <li>{ child }</li>) }
          </ul>
        </div>
        <CallFunction
          arg={ React.Children.count(props.children) }
          fn={ context._setNumItems }
        />
      </React.Fragment>
    }
  </Context.Consumer>
