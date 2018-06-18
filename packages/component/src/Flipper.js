import { css } from 'glamor';
import classNames from 'classnames';
import React from 'react';

import FilmContext from './FilmContext';

const ROOT_CSS = css({
  alignItems: 'center',
  background: 'Transparent',
  border: 0,
  cursor: 'pointer',
  display: 'flex',
  height: '100%',
  outline: 0,
  padding: 10,
  touchAction: 'none',

  '& > div': {
    backgroundColor: 'rgba(0, 0, 0, .2)',
    borderRadius: 20,
    color: 'rgba(255, 255, 255, .6)',
    fontFamily: ['Consolas', 'monospace'].map(font => `'${ font }'`).join(', '),
    fontSize: 16,
    height: 40,
    lineHeight: '40px',
    transitionProperty: 'background-color',
    transitionDuration: '100ms',
    width: 40
  },

  '&:hover > div': {
    backgroundColor: 'rgba(0, 0, 0, .4)',
    color: 'rgba(255, 255, 255, .8)',
    transitionDuration: 0
  },

  '&:active > div': {
    backgroundColor: 'rgba(0, 0, 0, .6)',
    color: 'White',
    transitionDuration: 0
  }
});

export default ({ children, className, mode }) =>
  <FilmContext.Consumer>
    { context =>
      <button
        className={ classNames(ROOT_CSS + '', className) }
        onClick={ mode === 'left' ? context.scrollOneLeft : context.scrollOneRight }
      >
        <div>
          { children }
        </div>
      </button>
    }
  </FilmContext.Consumer>
