import { css } from 'glamor';
import React from 'react';

const DOT_SIZE = 6;

const ROOT_CSS = css({
  alignItems: 'center',
  bottom: 0,
  display: 'flex',
  justifyContent: 'center',
  listStyleType: 'none',
  margin: 0,
  padding: 0,
  width: '100%',

  '& > li': {
    alignItems: 'center',
    display: 'flex',
    height: 20,
    justifyContent: 'center',
    position: 'relative',
    width: 20,

    '& > input': {
      cursor: 'pointer',
      height: '100%',
      left: 0,
      margin: 0,
      opacity: 0,
      position: 'absolute',
      top: 0,
      width: '100%'
    },

    '& > div': {
      background: 'rgba(0, 0, 0, .2)',
      borderRadius: DOT_SIZE / 2,
      height: DOT_SIZE,
      width: DOT_SIZE
    },

    '&:hover > div': {
      background: 'rgba(0, 0, 0, .4)'
    },

    '&:active > div': {
      background: 'rgba(0, 0, 0, .6)'
    },

    '& > input:checked + div': {
      background: 'rgba(0, 0, 0, .8)'
    }
  }
});

export default props =>
  <ul className={ ROOT_CSS }>
    {
      new Array(props.count).fill().map((_, index) =>
        <li key={ index }>
          <input
            checked={ props.value === index }
            onChange={ props.onClick && props.onClick.bind(null, index) }
            type="checkbox"
          >
          </input>
          <div />
        </li>
      )
    }
  </ul>
