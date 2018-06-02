import { css } from 'glamor';
import classNames from 'classnames';
import React from 'react';
import ReactDOM from 'react-dom';

import ScrollBar from './scrollBar';

const ROOT_CSS = css({
  position: 'relative',

  '& > .strip': {
    height: '100%',
    overflowX: 'scroll',
    overflowY: 'hidden',
    MsOverflowStyle: 'none',

    '&::-webkit-scrollbar': {
      display: 'none'
    },

    '& > ul': {
      display: 'flex',
      listStyleType: 'none',
      margin: 0,
      padding: 0
    }
  },

  '& > .flipper': {
    backdropFilter: 'blur(4px)',
    backgroundColor: 'rgba(0, 0, 0, .2)',
    border: 0,
    color: 'White',
    height: '100%',
    position: 'absolute',
    top: 0,
    width: 100,

    '&.left': { left: 0 },
    '&.right': { right: 0 }
  },

  '& > .debug': {
    backgroundColor: 'Red',
    color: 'White',
    left: 0,
    position: 'absolute',
    top: 0
  }
});

export default class Film extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.handleScroll = this.handleScroll.bind(this);
    // this.saveDebug = this.saveDebug.bind(this);
    this.saveStrip = this.saveStrip.bind(this);

    this.state = {
      offsetWidth: 1,
      scrollLeft: 0,
      scrollWidth: 1
    };
  }

  componentDidMount() {
    this.handleScroll({ target: ReactDOM.findDOMNode(this.stripRef) });
  }

  componentWillUnmount() {
    this.stripRef && ReactDOM.findDOMNode(this.stripRef).removeEventListener('scroll', this.handleScroll);
  }

  handleScroll(event) {
    const { offsetWidth, scrollLeft, scrollWidth } = event.target;

    this.setState(() => ({
      offsetWidth,
      scrollLeft,
      scrollWidth
    }));
  }

  saveStrip(ref) {
    this.stripRef = ref;

    ReactDOM.findDOMNode(this.stripRef).addEventListener('scroll', this.handleScroll, { passive: true });
  }

  render() {
    const { props, state } = this;

    return (
      <div className={ classNames(ROOT_CSS + '', props.className) }>
        <div className="strip" ref={ this.saveStrip }>
          <ul>
            {
              React.Children.map(props.children, child =>
                <li>{ child }</li>
              )
            }
          </ul>
        </div>
        <button className="flipper left">
          { props.leftFlipper || '<' }
        </button>
        <button className="flipper right">
          { props.rightFlipper || '>' }
        </button>
        <div className="debug" hidden={ true } ref={ this.saveDebug } />
        <ScrollBar
          offsetWidth={ state.offsetWidth }
          scrollLeft={ state.scrollLeft }
          scrollWidth={ state.scrollWidth }
        />
      </div>
    );
  }
}
