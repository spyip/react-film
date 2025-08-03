import PropTypes from 'prop-types';
import React, { Children } from 'react';

import useItemContainerCallbackRef from './hooks/useItemContainerCallbackRef.js';
import useScrollableCallbackRef from './hooks/useScrollableCallbackRef.js';

const Filmstrip = ({ children }) => {
  const itemContainerCallbackRef = useItemContainerCallbackRef();
  const scrollableCallbackRef = useScrollableCallbackRef();

  return (
    <div className="react-film__filmstrip" ref={scrollableCallbackRef}>
      <ul className="react-film__filmstrip__list" ref={itemContainerCallbackRef}>
        {Children.map(children, child => (
          <li className="react-film__filmstrip__item">{child}</li>
        ))}
      </ul>
    </div>
  );
};

Filmstrip.defaultProps = {
  children: undefined
};

Filmstrip.propTypes = {
  children: PropTypes.any
};

export default Filmstrip;
