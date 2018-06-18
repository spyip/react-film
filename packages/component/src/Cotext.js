import React from 'react';

export default React.createContext({
  _setFilmStripRef: () => 0,
  _setNumItems: () => 0,
  numItems: 0,
  scrollBarPercentage: '0%',
  scrollBarWidth: '0%',
  scrolling: false,
  scrollOneLeft: () => 0,
  scrollOneRight: () => 0,
  scrollTo: () => 0
});
