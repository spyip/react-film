import PropTypes from 'prop-types';
import React from 'react';

import Dot from './Dot';
import useNumItems from './hooks/useNumItems';

const Dots = ({ children }) => {
  const [numItems] = useNumItems();

  return (
    <ul className="react-film__dots">
      {new Array(numItems).fill().map((_, itemIndex) => (
        /* eslint-disable-next-line react/no-array-index-key */
        <Dot aria-label={itemIndex + 1 + ''} itemIndex={itemIndex} key={itemIndex}>
          {children}
        </Dot>
      ))}
    </ul>
  );
};

Dots.defaultProps = {
  children: undefined
};

Dots.propTypes = {
  children: PropTypes.any
};

export default Dots;
