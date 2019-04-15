import { css } from 'glamor';
import classNames from 'classnames';
import React from 'react';

import CallFunction from './CallFunction';
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
  className,
  itemContainerRef,
  scrollableRef
}) =>
  <InternalContext.Consumer>
    { ({ _setNumItems }) =>
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
  </InternalContext.Consumer>
