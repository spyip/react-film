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
  leftFlipperAriaLabel,
  leftFlipperText,
  nonce,
  rightFlipperAriaLabel,
  rightFlipperText,
  showDots,
  showFlipper,
  showScrollBar,
  styleSet
}) => {
  const styleOptions = useMemo(
    () => ({
      autoCenter,
      autoHide,
      autoHideFlipperOnEdge,
      dir,
      leftFlipperAriaLabel,
      leftFlipperText,
      flipperBlurFocusOnClick,
      rightFlipperAriaLabel,
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
      leftFlipperAriaLabel,
      leftFlipperText,
      flipperBlurFocusOnClick,
      rightFlipperAriaLabel,
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
      styleSet={styleSet}
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
  leftFlipperAriaLabel: undefined,
  leftFlipperText: undefined,
  nonce: undefined,
  rightFlipperAriaLabel: undefined,
  rightFlipperText: undefined,
  showDots: undefined,
  showFlipper: undefined,
  showScrollBar: undefined,
  styleSet: undefined
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
  leftFlipperAriaLabel: PropTypes.string,
  leftFlipperText: PropTypes.string,
  nonce: PropTypes.string,
  rightFlipperAriaLabel: PropTypes.string,
  rightFlipperText: PropTypes.string,
  showDots: PropTypes.bool,
  showFlipper: PropTypes.bool,
  showScrollBar: PropTypes.bool,
  styleSet: PropTypes.any
};

export default ReactFilm;
