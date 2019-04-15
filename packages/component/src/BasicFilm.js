import { css } from 'glamor';
import classNames from 'classnames';
import React from 'react';

import AutoCenter from './AutoCenter';
import Composer from './Composer';
import Context from './Context';
import createBasicStyleSet from './createBasicStyleSet';
import Dots from './Dots';
import FilmStrip from './FilmStrip';
import Flipper from './Flipper';
import memoize from './memoize';
import ScrollBar from './ScrollBar';

import InternalContext from './InternalContext';

const CAROUSEL_CSS = css({
  overflow: 'hidden',
  position: 'relative'
});

class BasicFilm extends React.Component {
  constructor(props) {
    super(props);

    this.createHeightStyle = memoize(height => ({ height }));
    this.createBasicStyleSet = memoize(({ autoHide }) => createBasicStyleSet({ autoHide }));

    this.props.setNumItems(React.Children.count(this.props.children));
  }

  componentWillReceiveProps(nextProps) {
    const numItems = React.Children.count(this.props.children);
    const nextNumItems = React.Children.count(nextProps.children);

    numItems !== nextNumItems && nextProps.setNumItems(nextNumItems);
  }

  render() {
    const { props } = this;

    const {
      carousel,
      dotsBox,
      dotsItem,
      leftFlipper,
      rightFlipper,
      scrollBarBox,
      scrollBarHandler,
    } = {
      ...this.createBasicStyleSet(props),
      ...(props.styleSet || {})
    };

    const {
      leftFlipperText = '<',
      numItems,
      rightFlipperText = '>',
      scrollBarWidth,
      scrolling,
      showDots = true,
      showFlipper = true,
      showScrollBar = true
    } = props;

    return (
      <React.Fragment>
        <div className={ props.className }>
          <div
            className={ classNames(CAROUSEL_CSS + '', { scrolling }, carousel + '') }
            style={ this.createHeightStyle(props.height) }
          >
            { !!numItems && scrollBarWidth !== '100%' && !!showFlipper &&
              <Flipper className={ leftFlipper + '' } mode="left">
                <div>{ leftFlipperText }</div>
              </Flipper>
            }
            <FilmStrip>
              { props.children }
            </FilmStrip>
            { !!numItems && scrollBarWidth !== '100%' && !!showFlipper &&
              <Flipper className={ rightFlipper + '' } mode="right">
                <div>{ rightFlipperText }</div>
              </Flipper>
            }
            { !!numItems && scrollBarWidth !== '100%' && !!showScrollBar &&
              <ScrollBar
                className={ scrollBarBox + '' }
                handlerClassName={ scrollBarHandler + '' }
              />
            }
          </div>
          {
            !!numItems && scrollBarWidth !== '100%' && !!showDots &&
              <Dots
                className={ dotsBox + '' }
                itemClassName={ dotsItem + ''}
              >
                { () => <div /> }
              </Dots>
          }
        </div>
        { props.autoCenter !== false && <AutoCenter /> }
      </React.Fragment>
    );
  }
}

export default props =>
  <Composer>
    <InternalContext.Consumer>
      { ({ setNumItems }) =>
        <Context.Consumer>
          { ({ numItems, scrollBarWidth, scrolling }) =>
            <BasicFilm
              { ...props }
              numItems={ numItems }
              scrollBarWidth={ scrollBarWidth }
              scrolling={ scrolling }
              setNumItems={ setNumItems }
            />
          }
        </Context.Consumer>
      }
    </InternalContext.Consumer>
  </Composer>
