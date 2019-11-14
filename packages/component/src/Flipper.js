import { css } from 'glamor';
import classNames from 'classnames';
import React, { useCallback, useContext, useRef } from 'react';

import Context from './Context';

const ROOT_CSS = css({
  border: 0,
  outline: 0,
  touchAction: 'none'
});

export default ({ 'aria-label': ariaLabel, blurFocusOnClick, children, className, mode }) => {
  const { scrollOneLeft, scrollOneRight } = useContext(Context);
  const ref = useRef();

  const handleClick = useCallback(() => {
    mode === 'left' ? scrollOneLeft() : scrollOneRight();
    blurFocusOnClick && ref.current.blur();
  }, [blurFocusOnClick, mode, ref, scrollOneLeft, scrollOneRight]);

  const handleKeyDown = useCallback(event => {
    const { key } = event;

    if (key === 'Enter' || key === ' ') {
      event.preventDefault();
      mode === 'left' ? scrollOneLeft() : scrollOneRight();
    }
  }, [mode, ref, scrollOneLeft, scrollOneRight]);

  return (
    <button
      aria-label={ ariaLabel || (mode === 'left' ? 'left' : 'right') }
      className={ classNames(ROOT_CSS + '', className) }
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      type="button"
      ref={ref}
    >
      <div className="slider">
        { children }
      </div>
    </button>
  );
}
