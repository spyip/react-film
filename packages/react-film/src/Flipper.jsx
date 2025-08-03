import classNames from 'classnames';
import PropTypes from 'prop-types';
import React, { useCallback, useRef } from 'react';

import useDir from './hooks/useDir.js';
import useScrollBarPercentage from './hooks/useScrollBarPercentage.js';
import useScrollOneLeft from './hooks/useScrollOneLeft.js';
import useScrollOneRight from './hooks/useScrollOneRight.js';

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

  if (dir === 'rtl') {
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
      className={classNames('react-film__flipper', 'react-film__main__overlay', {
        'react-film__flipper--left': left,
        'react-film__flipper--right': !left
      })}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      ref={buttonRef}
      type="button"
    >
      <div
        className={classNames('react-film__flipper__slider', 'react-film__main__slider', {
          'react-film__main__slider--hide': hide,
          'react-film__main__slider--left': left,
          'react-film__main__slider--right': !left
        })}
      >
        <div className="react-film__flipper__body">{children}</div>
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
