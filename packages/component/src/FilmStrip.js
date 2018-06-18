import { css } from 'glamor';
import classNames from 'classnames';
import React from 'react';

import CallFunction from './CallFunction';
import FilmContext from './FilmContext';

const ROOT_CSS = css({
  height: '100%',
  MsOverflowStyle: 'none',
  overflowX: 'scroll',
  overflowY: 'hidden',
  touchAction: 'pan-x',
  WebkitOverflowScrolling: 'touch',

  '&::-webkit-scrollbar': {
    display: 'none'
  },

  '& > ul': {
    display: 'flex',
    listStyleType: 'none',
    margin: 0,
    padding: 0,

    '& > li': {
      display: 'flex'
    }
  }
});

export default props =>
  <FilmContext.Consumer>
    { context =>
      <React.Fragment>
        <div className={ classNames(ROOT_CSS + '', props.className) } ref={ context._setFilmStripRef }>
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
  </FilmContext.Consumer>
