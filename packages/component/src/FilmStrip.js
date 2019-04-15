import { css } from 'glamor';
import classNames from 'classnames';
import React from 'react';

import CallFunction from './CallFunction';
import Context from './Context';
import InternalContext from './InternalContext';

const ROOT_CSS = css({
  MsOverflowStyle: 'none',
  overflowX: 'scroll',
  overflowY: 'hidden',
  touchAction: 'manipulation',
  WebkitOverflowScrolling: 'touch',

  '&::-webkit-scrollbar': {
    display: 'none'
  },

  '& > ul': {
    display: 'flex',
    listStyleType: 'none',
    margin: 0,
    padding: 0
  }
});

export default ({
  children,
  className
}) =>
  <InternalContext.Consumer>
    { ({ _setNumItems }) =>
      <Context.Consumer>
        { ({ itemContainerRef, scrollableRef }) =>
          <React.Fragment>
            <div
              className={ classNames(ROOT_CSS + '', className) }
              ref={ scrollableRef }
            >
              <ul ref={ itemContainerRef }>
                { React.Children.map(children, child => <li>{ child }</li>) }
              </ul>
            </div>
            <CallFunction
              arg={ React.Children.count(children) }
              fn={ _setNumItems }
            />
          </React.Fragment>
        }
      </Context.Consumer>
    }
  </InternalContext.Consumer>
