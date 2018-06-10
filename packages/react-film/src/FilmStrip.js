import { css } from 'glamor';
import classNames from 'classnames';
import React from 'react';

import FilmContext from './FilmContext';

const ROOT_CSS = css({
  overflow: 'hidden',
  position: 'relative',

  '& > .strip': {
    height: '100%',
    overflowX: 'scroll',
    overflowY: 'hidden',
    MsOverflowStyle: 'none',
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
  }
});

export default props =>
  <FilmContext.Consumer>
    { context =>
      <div className={ classNames(ROOT_CSS + '', props.className) }>
        <div className="strip" ref={ context.setFilmStripRef }>
          <ul>
            { React.Children.map(props.children, child => <li>{ child }</li>) }
          </ul>
        </div>
      </div>
    }
  </FilmContext.Consumer>
