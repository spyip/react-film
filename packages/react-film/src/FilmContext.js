import React from 'react';

const FilmContext = React.createContext({
  saveStripRef: () => 0,
  scrollBarLeft: '0%',
  scrollBarWidth: '0%',
  scrolling: false,
  scrollLeft: 0,
  scrollTo: () => 0,
  scrollToLeft: () => 0,
  scrollToRight: () => 0,
  stripRef: null
});

export default FilmContext
