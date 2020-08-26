import classNames from 'classnames';
import PropTypes from 'prop-types';
import React, { Children } from 'react';

import useInternalContext from './hooks/internal/useInternalContext';

const FilmStrip = ({ children }) => {
  const { itemContainerRef, scrollableRef } = useInternalContext();

  return (
    <div className="react-film__filmstrip" ref={scrollableRef}>
      <ul className="react-film__filmstrip__list" ref={itemContainerRef}>
        {Children.map(children, child => (
          <li className="react-film__filmstrip__item">{child}</li>
        ))}
      </ul>
    </div>
  );
};

FilmStrip.defaultProps = {
  children: undefined
};

FilmStrip.propTypes = {
  children: PropTypes.any
};

export default FilmStrip;
