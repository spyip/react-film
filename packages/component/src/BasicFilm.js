import { css } from 'glamor';
import classNames from 'classnames';
import React from 'react';

import AutoCenter from './AutoCenter';
import Composer from './Composer';
import Context from './Context';
import createBasicStyles from './createBasicStyleSet';
import Dots from './Dots';
import FilmStrip from './FilmStrip';
import Flipper from './Flipper';
import memoize from './memoize';
import ScrollBar from './ScrollBar';

const CAROUSEL_CSS = css({
  overflow: 'hidden',
  position: 'relative'
});

export default class BasicFilm extends React.Component {
  constructor(props) {
    super(props);

    this.createHeightStyle = memoize(height => ({ height }));
    this.createBasicStyleSet = memoize(({ autoHide }) => createBasicStyles({ autoHide }));
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
      showDots = true,
      showFlipper = true,
      showScrollBar = true
    } = props;

    return (
      <Composer>
        <Context.Consumer>
          { ({ scrolling, scrollBarWidth }) =>
            <div className={ props.className }>
              <div
                className={ classNames(CAROUSEL_CSS + '', { scrolling }, carousel + '') }
                style={ this.createHeightStyle(props.height) }
              >
                <FilmStrip>
                  { props.children }
                </FilmStrip>
                { scrollBarWidth !== '100%' && !!showScrollBar &&
                  <ScrollBar
                    className={ scrollBarBox + '' }
                    handlerClassName={ scrollBarHandler + '' }
                  />
                }
                { scrollBarWidth !== '100%' && !!showFlipper &&
                  <React.Fragment>
                    <Flipper className={ leftFlipper + '' } mode="left">
                      <div>
                        &lt;
                      </div>
                    </Flipper>
                    <Flipper className={ rightFlipper + '' } mode="right">
                      <div>
                        &gt;
                      </div>
                    </Flipper>
                  </React.Fragment>
                }
              </div>
              {
                scrollBarWidth !== '100%' && !!showDots &&
                  <Dots
                    className={ dotsBox + '' }
                    itemClassName={ dotsItem + ''}
                  >
                    { () => <div /> }
                  </Dots>
              }
            </div>
          }
        </Context.Consumer>
        { props.autoCenter !== false && <AutoCenter /> }
      </Composer>
    );
  }
}
