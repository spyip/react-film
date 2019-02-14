import { css } from 'glamor';
import classNames from 'classnames';
import React from 'react';

import Context from './Context';

const ROOT_CSS = css({
  border: 0,
  outline: 0,
  touchAction: 'none'
});

export default ({ 'aria-label': ariaLabel, children, className, mode, hideWhenFirstOrLast }) =>
  <Context.Consumer>
      {({ scrollOneLeft, scrollOneRight, index, numItems }) =>
      !(hideWhenFirstOrLast && index == 0 && mode == 'left') && !(hideWhenFirstOrLast && index == numItems - 1 && mode != 'left') &&
      <button
        aria-label={ ariaLabel || (mode === 'left' ? 'left' : 'right') }
        className={ classNames(ROOT_CSS + '', className) }
        onClick={ (mode === 'left' ? scrollOneLeft : scrollOneRight) }
      >
        <div className="slider">
          { children }
        </div>
      </button>
    }
  </Context.Consumer>

