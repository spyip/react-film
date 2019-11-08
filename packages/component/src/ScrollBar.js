import { css } from 'glamor';
import classNames from 'classnames';
import React from 'react';

import Context from './Context';

const ROOT_CSS = css({
  boxSizing: 'border-box'
});

const IS_FIREFOX = /Firefox\//.test(navigator.userAgent);
const IS_SAFARI = /Safari\//.test(navigator.userAgent);

export default ({ className, handlerClassName }) =>
  <Context.Consumer>
    { ({ dir, scrollBarPercentage, scrollBarWidth }) =>
      <div className={ classNames(ROOT_CSS + '', className) }>
        <div
          className={ handlerClassName }
          style={{
            ...(dir === 'rtl' ?
              IS_FIREFOX || IS_SAFARI ?
                {
                  marginRight: `${ (parseFloat(scrollBarWidth) / 100 - 1) * parseFloat(scrollBarPercentage) }%`
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