import React from 'react';

const FilmContext = React.createContext({
  filmStripRef: null,
  scrollBarLeft: '0%',
  scrollBarWidth: '0%',
  scrolling: false,
  scrollLeft: 0,
  scrollTo: () => 0,
  scrollToLeft: () => 0,
  scrollToRight: () => 0
});

export default FilmContext
