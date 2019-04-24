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
          aria-label={ itemIndex + 1 }
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
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  handleChange() {
    this.props.scrollTo(() => this.props.index);
  }

  handleKeyPress(evt) {
    const { keyCode } = evt;

    if (keyCode === 13 || keyCode === 32) {
      evt.preventDefault();
      evt.stopPropagation();

      this.handleChange();
    }
  }

  render() {
    const {
      props: { 'aria-label': ariaLabel, checked, children, className }
    } = this;

    return (
      <li className={ classNames(
        DOT_CSS + '',
        (className || '') + ''
      ) }>
        <input
          aria-label={ ariaLabel }
          aria-pressed={ checked }
          checked={ checked }
          onChange={ this.handleChange }
          onKeyPress={ this.handleKeyPress }
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
