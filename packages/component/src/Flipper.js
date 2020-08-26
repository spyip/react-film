import classNames from 'classnames';
import PropTypes from 'prop-types';
import React, { useCallback, useRef } from 'react';

import * as browser from './browser';
import useDir from './hooks/useDir';
import useScrollBarPercentage from './hooks/useScrollBarPercentage';
import useScrollOneLeft from './hooks/useScrollOneLeft';
import useScrollOneRight from './hooks/useScrollOneRight';

const Flipper = ({ 'aria-label': ariaLabel, blurFocusOnClick, children, mode }) => {
  const [dir] = useDir();
  const [scrollBarPercentage] = useScrollBarPercentage();
  const buttonRef = useRef();
  const left = mode === 'left';
  const scrollOneLeft = useScrollOneLeft();
  const scrollOneRight = useScrollOneRight();

  const handleClick = useCallback(() => {
    left ? scrollOneLeft() : scrollOneRight();
    blurFocusOnClick && buttonRef.current && buttonRef.current.blur();
  }, [blurFocusOnClick, buttonRef, left, scrollOneLeft, scrollOneRight]);

  const handleKeyDown = useCallback(
    event => {
      const { key } = event;

      if (key === 'Enter' || key === ' ') {
        event.preventDefault();
        left ? scrollOneLeft() : scrollOneRight();
      }
    },
    [left, scrollOneLeft, scrollOneRight]
  );

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
      aria-label={ariaLabel || (left ? 'left' : 'right')}
      className={classNames('react-film__flipper', {
        'react-film__flipper--hide': hide,
        'react-film__flipper--left': left,
        'react-film__flipper--right': !left
      })}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      ref={buttonRef}
      type="button"
    >
      <div className="react-film__flipper__slider">
        <div className="react-film__flipper__content">{children}</div>
      </div>
    </button>
  );
};

Flipper.defaultProps = {
  'aria-label': undefined,
  blurFocusOnClick: false,
  children: undefined,
  mode: 'left'
};

Flipper.propTypes = {
  'aria-label': PropTypes.string,
  blurFocusOnClick: PropTypes.bool,
  children: PropTypes.any,
  mode: PropTypes.oneOf(['left', 'right'])
};

export default Flipper;
