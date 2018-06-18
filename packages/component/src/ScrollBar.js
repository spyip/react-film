import { css } from 'glamor';
import classNames from 'classnames';
import React from 'react';

import FilmContext from './FilmContext';

const ROOT_CSS = css({
  boxSizing: 'border-box'
});

export default ({ className, handlerClassName }) =>
  <FilmContext.Consumer>
    { ({ scrollBarPercentage, scrollBarWidth }) =>
      <div className={ classNames(ROOT_CSS + '', className) }>
        <div
          className={ handlerClassName }
          style={{
            marginLeft: `${ (1 - parseFloat(scrollBarWidth) / 100) * parseFloat(scrollBarPercentage) }%`,
            width: scrollBarWidth
          }}
        />
      </div>
    }
  </FilmContext.Consumer>
