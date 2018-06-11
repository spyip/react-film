import { css } from 'glamor';
import classNames from 'classnames';
import React from 'react';

import FilmContext from './FilmContext';

const ROOT_CSS = css({
  overflow: 'hidden',
  position: 'relative',

  '& > .strip': {
    height: '100%',
    MsOverflowStyle: 'none',
    overflowX: 'scroll',
    overflowY: 'hidden',
    touchAction: 'pan-x',
    WebkitOverflowScrolling: 'touch',

    '&::-webkit-scrollbar': {
      display: 'none'
    },

    '& > ul': {
      display: 'flex',
      listStyleType: 'none',
      margin: 0,
      padding: 0,

      '& > li': {
        display: 'flex'
      }
    }
  }
});

class Call extends React.Component {
  componentDidMount() {
    const { props: { arg, fn } } = this;

    fn && fn(arg);
  }

  componentDidUpdate(prevProps) {
    const { props: { arg, fn } } = this;

    (arg !== prevProps.arg || fn !== prevProps.fn) && fn(arg);
  }

  render() {
    return false;
  }
}

export default props =>
  <FilmContext.Consumer>
    { context =>
      <div className={ classNames(ROOT_CSS + '', props.className) }>
        <div className="strip" ref={ context.setFilmStripRef }>
          <ul>
            { React.Children.map(props.children, child => <li>{ child }</li>) }
          </ul>
        </div>
        <Call
          arg={ React.Children.count(props.children) }
          fn={ context.setNumItems }
        />
      </div>
    }
  </FilmContext.Consumer>
