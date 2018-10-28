import { css } from 'glamor';
import classNames from 'classnames';
import React from 'react';

import Context from './Context';

const ROOT_CSS = css({
  display: 'flex',
  listStyleType: 'none',
  margin: 0,
  padding: 0
});

const DOT_CSS = css({
  position: 'relative',

  '& > input': {
    cursor: 'pointer',
    height: '100%',
    left: 0,
    margin: 0,
    opacity: 0,
    position: 'absolute',
    top: 0,
    width: '100%'
  }
});

const Dots = ({
  children,
  className,
  index,
  itemClassName,
  numItems,
  scrollTo
}) => (
  <ul className={ classNames(ROOT_CSS + '', (className || '') + '') }>
    {
      new Array(numItems).fill().map((_, itemIndex) =>
        <Dot
          checked={ itemIndex === index }
          className={ itemClassName }
          index={ itemIndex }
          key={ itemIndex }
          scrollTo={ scrollTo }
        >
          { children }
        </Dot>
      )
    }
  </ul>
);

class Dot extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }

  handleChange() {
    this.props.scrollTo(() => this.props.index);
  }

  handleKeyDown(evt) {
    if (evt.keyCode === 13) {
      evt.preventDefault();
      evt.stopPropagation();

      this.handleChange();
    }
  }

  render() {
    const {
      props: { checked, children, className }
    } = this;

    return (
      <li className={ classNames(
        DOT_CSS + '',
        (className || '') + ''
      ) }>
        <input
          checked={ checked }
          onChange={ this.handleChange }
          onKeyDown={ this.handleKeyDown }
          role="button"
          type="checkbox"
        />
        { children && children() }
      </li>
    );
  }
}

export default props =>
  <Context.Consumer>
    { ({ index, numItems, scrollTo }) =>
      <Dots
        index={ index }
        numItems={ numItems }
        scrollTo={ scrollTo }
        {...props }
      />
    }
  </Context.Consumer>
