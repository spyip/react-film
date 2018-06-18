import React from 'react';

const FilmContext = React.createContext({
  _setFilmStripRef: () => 0,
  _setNumItems: () => 0,
  numItems: 0,
  scrollBarFraction: '0%',
  scrollBarWidth: '0%',
  scrolling: false,
  scrollOneLeft: () => 0,
  scrollOneRight: () => 0,
  scrollTo: () => 0
});

export default FilmContext
