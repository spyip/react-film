import PropTypes from 'prop-types';
import React, { Children, useMemo } from 'react';

import BasicFilm from './BasicFilm';
import Composer from './Composer';

const ReactFilm = ({
  autoCenter,
  autoHide,
  autoHideFlipperOnEdge,
  children,
  className,
  dir,
  flipperBlurFocusOnClick,
  height,
  leftFlipperText,
  nonce,
  rightFlipperText,
  showDots,
  showFlipper,
  showScrollBar,
  styleSheet
}) => {
  const styleOptions = useMemo(
    () => ({
      autoCenter,
      autoHide,
      autoHideFlipperOnEdge,
      dir,
      leftFlipperText,
      flipperBlurFocusOnClick,
      rightFlipperText,
      showDots,
      showFlipper,
      showScrollBar
    }),
    [
      autoCenter,
      autoHide,
      autoHideFlipperOnEdge,
      dir,
      leftFlipperText,
      flipperBlurFocusOnClick,
      rightFlipperText,
      showDots,
      showFlipper,
      showScrollBar
    ]
  );

  return (
    <Composer
      dir={dir}
      height={height}
      nonce={nonce}
      numItems={children ? Children.count(children) : 0}
      styleOptions={styleOptions}
      styleSheet={styleSheet}
    >
      <BasicFilm className={className}>{children}</BasicFilm>
    </Composer>
  );
};

ReactFilm.defaultProps = {
  ...BasicFilm.defaultProps,
  autoCenter: undefined,
  autoHide: undefined,
  autoHideFlipperOnEdge: undefined,
  children: undefined,
  className: undefined,
  dir: undefined,
  flipperBlurFocusOnClick: undefined,
  leftFlipperText: undefined,
  nonce: undefined,
  rightFlipperText: undefined,
  showDots: undefined,
  showFlipper: undefined,
  showScrollBar: undefined,
  styleSheet: undefined
};

ReactFilm.propTypes = {
  ...BasicFilm.propTypes,
  autoCenter: PropTypes.bool,
  autoHide: PropTypes.bool,
  autoHideFlipperOnEdge: PropTypes.bool,
  children: PropTypes.any,
  className: PropTypes.string,
  dir: PropTypes.oneOf(['auto', 'ltr', 'rtl']),
  flipperBlurFocusOnClick: PropTypes.bool,
  height: PropTypes.number,
  leftFlipperText: PropTypes.string,
  nonce: PropTypes.string,
  rightFlipperText: PropTypes.string,
  showDots: PropTypes.bool,
  showFlipper: PropTypes.bool,
  showScrollBar: PropTypes.bool,
  styleSheet: PropTypes.any
};

export default ReactFilm;
