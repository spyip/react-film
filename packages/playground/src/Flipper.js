import { css } from 'glamor';
import classNames from 'classnames';
import React from 'react';

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
    color: 'White',
    height: 40,
    lineHeight: '40px',
    transitionProperty: 'background-color',
    transitionDuration: '100ms',
    width: 40
  },

  '&:hover > div': {
    backgroundColor: 'rgba(0, 0, 0, .4)',
    transitionDuration: 0
  },

  '&:active > div': {
    backgroundColor: 'rgba(0, 0, 0, .6)',
    transitionDuration: 0
  }
});

export default props =>
  <button
    className={ classNames(ROOT_CSS + '', props.className) }
    onClick={ props.onClick }
  >
    <div>
      { props.children }
    </div>
  </button>
