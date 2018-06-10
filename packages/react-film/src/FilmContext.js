import React from 'react';

const FilmContext = React.createContext({
  filmStrip: null,
  scrollBarLeft: '0%',
  scrollBarWidth: '0%',
  scrolling: false,
  scrollLeft: 0,
  scrollTo: () => 0,
  scrollToLeft: () => 0,
  scrollToRight: () => 0,
  setFilmStripRef: () => 0
});

export default FilmContext
