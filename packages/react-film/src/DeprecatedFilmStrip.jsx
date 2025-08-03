import React from 'react';

import Filmstrip from './Filmstrip.jsx';

let deprecationNotesShown;

const DeprecatedFilmStrip = props => {
  if (!deprecationNotesShown) {
    console.warn('react-film: <FilmStrip> is being renamed to <Filmstrip>.');
    deprecationNotesShown = true;
  }

  return <Filmstrip {...props} />;
};

DeprecatedFilmStrip.defaultProps = Filmstrip.defaultProps;
DeprecatedFilmStrip.propTypes = Filmstrip.propTypes;

export default DeprecatedFilmStrip;
