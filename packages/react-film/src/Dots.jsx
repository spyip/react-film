import React from 'react';

import Dot from './Dot.jsx';
import useNumItems from './hooks/useNumItems.js';

const Dots = () => {
  const [numItems] = useNumItems();

  return (
    <ul className="react-film__dots">
      {new Array(numItems).fill().map((_, itemIndex) => (
        /* eslint-disable-next-line react/no-array-index-key */
        <Dot aria-label={itemIndex + 1 + ''} itemIndex={itemIndex} key={itemIndex} />
      ))}
    </ul>
  );
};

export default Dots;
