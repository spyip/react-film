import classNames from 'classnames';
import React from 'react';

import AutoCenter from './AutoCenter';
import createBasicStyles from './createBasicStyles';
import Dots from './Dots';
import FilmComposer from './FilmComposer';
import FilmContext from './FilmContext';
import FilmStrip from './FilmStrip';
import Flipper from './Flipper';
import memoize from './memoize';
import ScrollBar from './ScrollBar';

export default class BasicFilm extends React.Component {
  constructor(props) {
    super(props);

    this.createHeightStyle = memoize(height => ({ height }));
    this.createStyles = memoize(({ autoHide }) => createBasicStyles({ autoHide }));
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
      scrollBarHandler
    } = this.createStyles(props);

    return (
      <FilmComposer>
        <FilmContext.Consumer>
          { ({ scrolling, scrollBarWidth }) =>
            <div className={ props.className }>
              <div
                className={ classNames({ scrolling }, props.carouselClassName || carousel + '') }
                style={ this.createHeightStyle(props.height) }
              >
                <FilmStrip>
                  { props.children }
                </FilmStrip>
                {
                  scrollBarWidth !== '100%' &&
                    <React.Fragment>
                      <ScrollBar
                        className={ props.scrollBarBoxClassName || scrollBarBox + '' }
                        handlerClassName={ props.scrollBarHandlerClassName || scrollBarHandler + '' }
                      />
                      <Flipper className={ props.leftFlipperClassName || leftFlipper + '' } mode="left">
                        <div>
                          &lt;
                        </div>
                      </Flipper>
                      <Flipper className={ props.rightFlipperClassName || rightFlipper + '' } mode="right">
                        <div>
                          &gt;
                        </div>
                      </Flipper>
                    </React.Fragment>
                }
              </div>
              {
                scrollBarWidth !== '100%' &&
                  <Dots
                    className={ props.dotsBoxClassName || dotsBox + '' }
                    itemClassName={ props.dotsItemClassName || dotsItem + ''}
                  >
                    { () => <div /> }
                  </Dots>
              }
            </div>
          }
        </FilmContext.Consumer>
        { props.autoCenter !== false && <AutoCenter /> }
      </FilmComposer>
    );
  }
}
