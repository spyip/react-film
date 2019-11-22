import { css } from 'glamor';
import classNames from 'classnames';
import React from 'react';

import * as browser from './browser';
import Context from './Context';

const ROOT_CSS = css({
  boxSizing: 'border-box'
});

export default ({ className, handlerClassName }) =>
  <Context.Consumer>
    { ({ dir, scrollBarPercentage, scrollBarWidth }) =>
      <div className={ classNames(ROOT_CSS + '', className) }>
        <div
          className={ handlerClassName }
          style={{
            ...(dir === 'rtl' ?
              browser.firefox || browser.safari ?
                {
                  marginRight: `${ (parseFloat(scrollBarWidth) / 100 - 1) * parseFloat(scrollBarPercentage) }%`
                }
              : browser.edgeUWP || browser.internetExplorer ?
                {
                  marginRight: `${ (1 - parseFloat(scrollBarWidth) / 100) * parseFloat(scrollBarPercentage) }%`
                }
              :
                {
                  marginRight: `${ (1 - parseFloat(scrollBarWidth) / 100) * (100 - parseFloat(scrollBarPercentage)) }%`
                }
            :
              {
                marginLeft: `${ (1 - parseFloat(scrollBarWidth) / 100) * parseFloat(scrollBarPercentage) }%`
              }
            ),
            width: scrollBarWidth
          }}
        />
      </div>
    }
  </Context.Consumer>