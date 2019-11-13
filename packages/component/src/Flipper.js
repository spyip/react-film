import { css } from 'glamor';
import classNames from 'classnames';
import React from 'react';

import Context from './Context';

const ROOT_CSS = css({
  border: 0,
  outline: 0,
  touchAction: 'none'
});

export default ({ 'aria-label': ariaLabel, children, className, keepFocus, mode }) => 
  <Context.Consumer>
    {({ scrollOneLeft, scrollOneRight }) => {
      let ref;

      const click = () => {
        (mode === 'left' ? scrollOneLeft : scrollOneRight)();
        !keepFocus && ref.blur();
      };

      const keyDown = event => {
        const { key } = event;
        if (key === 'Enter' || key === ' ') {
          event.preventDefault();
          (mode === 'left' ? scrollOneLeft : scrollOneRight)();
        }
      };

      return (
        <button
          aria-label={ ariaLabel || (mode === 'left' ? 'left' : 'right') }
          className={ classNames(ROOT_CSS + '', className) }
          onClick={click}
          onKeyDown={keyDown}
          type="button"
          ref={element => ref = element}
        >
          <div className="slider">
            { children }
          </div>
        </button>)
    }
  }
  </Context.Consumer>
