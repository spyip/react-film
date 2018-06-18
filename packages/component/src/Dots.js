import { css } from 'glamor';
import classNames from 'classnames';
import React from 'react';

import FilmContext from './FilmContext';

const ROOT_CSS = css({
  display: 'flex',
  listStyleType: 'none',
  margin: 0,
  padding: 0,

  '& > li': {
    position: 'relative',

    '& > input': {
      cursor: 'pointer',
      height: '100%',
      left: 0,
      margin: 0,
      opacity: 0,
      position: 'absolute',
      top: 0,
      width: '100%'
    }
  }
});

export default ({ children, className, itemClassName }) =>
  <FilmContext.Consumer>
    { context =>
      <ul className={ classNames(ROOT_CSS + '', className) }>
        {
          new Array(context.numItems).fill().map((_, index) =>
            <li className={ itemClassName } key={ index }>
              <input
                checked={ index === context.index }
                onChange={ () => context.scrollTo(() => index) }
                type="checkbox"
              >
              </input>
              { children && children() }
            </li>
          )
        }
      </ul>
    }
  </FilmContext.Consumer>
