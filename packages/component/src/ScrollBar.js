import { css } from 'glamor';
import classNames from 'classnames';
import React from 'react';

import FilmContext from './FilmContext';

const ROOT_CSS = css({
  boxSizing: 'border-box'
});

export default ({ className, handlerClassName }) =>
  <FilmContext.Consumer>
    { context =>
      <div className={ classNames(ROOT_CSS + '', className) }>
        <div
          className={ handlerClassName }
          style={{
            marginLeft: context.scrollBarLeft,
            width: context.scrollBarWidth
          }}
        />
      </div>
    }
  </FilmContext.Consumer>
