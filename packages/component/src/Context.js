import React from 'react';

export default React.createContext({
  numItems: 0,
  scrollBarPercentage: '0%',
  scrollBarWidth: '0%',
  scrolling: false,
  scrollOneLeft: () => 0,
  scrollOneRight: () => 0,
  scrollTo: () => 0
});
