import { css } from 'glamor';
import classNames from 'classnames';
import React, { useCallback, useContext, useRef } from 'react';

import Context from './Context';

import * as browser from './browser';

const ROOT_CSS = css({
  border: 0,
  outline: 0
});

export default ({ 'aria-label': ariaLabel, blurFocusOnClick, children, className, mode }) => {
  const { dir, scrollBarPercentage, scrollOneLeft, scrollOneRight } = useContext(Context);
  const ref = useRef();
  const left = mode === 'left';

  const handleClick = useCallback(() => {
    left ? scrollOneLeft() : scrollOneRight();
    blurFocusOnClick && ref.current.blur();
  }, [blurFocusOnClick, mode, ref, scrollOneLeft, scrollOneRight]);

  const handleKeyDown = useCallback(event => {
    const { key } = event;

    if (key === 'Enter' || key === ' ') {
      event.preventDefault();
      left ? scrollOneLeft() : scrollOneRight();
    }
  }, [mode, ref, scrollOneLeft, scrollOneRight]);

  let hide;

  if (dir === 'rtl' && !browser.chrome) {
    if (left) {
      hide = scrollBarPercentage === '100%' || scrollBarPercentage === '-100%';
    } else {
      hide = scrollBarPercentage === '0%';
    }
  } else {
    if (left) {
      hide = scrollBarPercentage === '0%';
    } else {
      hide = scrollBarPercentage === '100%';
    }
  }

  return (
    <button
      aria-label={ ariaLabel || (left ? 'left' : 'right') }
      className={ classNames(
        ROOT_CSS + '',
        className,
        { hide }
      ) }
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
