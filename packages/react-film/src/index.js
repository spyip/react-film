import { css } from 'glamor';
import classNames from 'classnames';
import React from 'react';

const ROOT_CSS = css({
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
