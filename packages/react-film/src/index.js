import { css } from 'glamor';
import React from 'react';

const ROOT_CSS = css({
});

export default props =>
  <div className={ ROOT_CSS }>
    <ul>
      <li><img src="/image/01.jpg" /></li>
      <li><img src="/image/02.jpg" /></li>
      <li><img src="/image/03.jpg" /></li>
    </ul>
  </div>
