import { css } from 'glamor';
import classNames from 'classnames';
import React from 'react';

import Context from './Context';

const ROOT_CSS = css({
  display: 'flex',
  listStyleType: 'none',
  margin: 0,
  MsOverflowStyle: 'none',
  overflowX: 'scroll',
  overflowY: 'hidden',
  padding: 0,
  touchAction: 'manipulation',
  WebkitOverflowScrolling: 'touch',

  '&::-webkit-scrollbar': {
    display: 'none'
  }
});

export default props =>
  <Context.Consumer>
    { ({ setFilmStripRef }) =>
      <React.Fragment>
        <ul
          className={ classNames(ROOT_CSS + '', props.className) }
          ref={ setFilmStripRef }
        >
          { React.Children.map(props.children, child => <li>{ child }</li>) }
        </ul>
      </React.Fragment>
    }
  </Context.Consumer>
