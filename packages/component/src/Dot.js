import PropTypes from 'prop-types';
import React, { useCallback } from 'react';

import useIndex from './hooks/useIndex';
import useScrollTo from './hooks/useScrollTo';

const Dot = ({ 'aria-label': ariaLabel, itemIndex }) => {
  const [index] = useIndex();
  const scrollTo = useScrollTo();

  const checked = index === itemIndex;
  const handleChange = useCallback(() => scrollTo(() => itemIndex), [itemIndex, scrollTo]);

  const handleKeyPress = useCallback(
    event => {
      const { keyCode } = event;

      if (keyCode === 13 || keyCode === 32) {
        event.preventDefault();
        event.stopPropagation();
        handleChange();
      }
    },
    [handleChange]
  );

  return (
    <li className="react-film__dot">
      <input
        aria-label={ariaLabel}
        aria-pressed={checked}
        checked={checked}
        className="react-film__dot__input"
        onChange={handleChange}
        onKeyPress={handleKeyPress}
        role="button"
        type="checkbox"
      />
      <div className="react-film__dot__dot" />
    </li>
  );
};

Dot.defaultProps = {
  'aria-label': undefined
};

Dot.propTypes = {
  'aria-label': PropTypes.string,
  itemIndex: PropTypes.number.isRequired
};

export default Dot;
