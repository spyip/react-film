import { css } from 'glamor';
import classNames from 'classnames';
import React from 'react';

import Context from './Context';

const ROOT_CSS = css({
  border: 0,
  outline: 0,
  touchAction: 'none'
});

export default ({ 'aria-label': ariaLabel, children, className, mode }) =>
  <Context.Consumer>
    { context =>
      <button
        aria-label={ ariaLabel || (mode === 'left' ? 'left' : 'right') }
        className={ classNames(ROOT_CSS + '', className) }
        onClick={ mode === 'left' ? context.scrollOneLeft : context.scrollOneRight }
        type="button"
      >
        <div className="slider">
          { children }
        </div>
      </button>
    }
  </Context.Consumer>
