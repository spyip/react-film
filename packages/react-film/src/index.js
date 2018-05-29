import { css } from 'glamor';
import React from 'react';

const ROOT_CSS = css({
  '& > ul': {
    listStyleType: 'none',
    margin: 0,
    padding: 0
  }
});

export default props =>
  <div className={ ROOT_CSS }>
    <ul>
      {
        React.Children.map(props.children, child =>
          <li>{ child }</li>
        )
      }
    </ul>
  </div>
