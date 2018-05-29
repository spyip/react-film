import { css } from 'glamor';
import classNames from 'classnames';
import React from 'react';

const ROOT_CSS = css({
  overflowX: 'scroll',
  overflowY: 'hidden',

  '& > ul': {
    listStyleType: 'none',
    margin: 0,
    padding: 0,
    display: 'flex'
  }
});

export default props =>
  <div className={ classNames(ROOT_CSS + '', props.className) }>
    <ul>
      {
        React.Children.map(props.children, child =>
          <li>{ child }</li>
        )
      }
    </ul>
  </div>
