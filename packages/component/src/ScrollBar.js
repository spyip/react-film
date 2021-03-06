/* eslint no-magic-numbers: ["error", { "ignore": [1, 100] }] */

import React from 'react';

import * as browser from './browser';
import useDir from './hooks/useDir';
import useScrollBarPercentage from './hooks/useScrollBarPercentage';
import useScrollBarWidth from './hooks/useScrollBarWidth';

const ScrollBar = () => {
  const [dir] = useDir();
  const [scrollBarPercentage] = useScrollBarPercentage();
  const [scrollBarWidth] = useScrollBarWidth();

  return (
    <div className="react-film__scroll-bar react-film__main__slider react-film__main__slider--bottom">
      <div
        className="react-film__scroll-bar__handle"
        style={{
          ...(dir === 'rtl'
            ? browser.edgeUWP || browser.internetExplorer
              ? {
                  marginRight: `${(1 - parseFloat(scrollBarWidth) / 100) * parseFloat(scrollBarPercentage)}%`
                }
              : {
                  marginRight: `${(parseFloat(scrollBarWidth) / 100 - 1) * parseFloat(scrollBarPercentage)}%`
                }
            : {
                marginLeft: `${(1 - parseFloat(scrollBarWidth) / 100) * parseFloat(scrollBarPercentage)}%`
              }),
          width: scrollBarWidth
        }}
      />
    </div>
  );
};

export default ScrollBar;
