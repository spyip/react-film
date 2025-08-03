import classNames from 'classnames';
import PropTypes from 'prop-types';
import React, { useMemo } from 'react';

import Dots from './Dots.jsx';
import Filmstrip from './Filmstrip.jsx';
import Flipper from './Flipper.jsx';
import ScrollBar from './ScrollBar.jsx';
import useDir from './hooks/useDir.js';
import useHeight from './hooks/useHeight.js';
import useNumItems from './hooks/useNumItems.js';
import useScrollBarWidth from './hooks/useScrollBarWidth.js';
import useScrolling from './hooks/useScrolling.js';
import useStyleOptions from './hooks/useStyleOptions.js';
import useStyleSetClassNames from './hooks/useStyleSetClassNames.js';

const BasicFilm = ({ children, className }) => {
  const [dir] = useDir();
  const [height] = useHeight();
  const [numItems] = useNumItems();
  const [scrollBarWidth] = useScrollBarWidth();
  const [scrolling] = useScrolling();
  const [{ root: rootClassName }] = useStyleSetClassNames();
  const [
    {
      flipperBlurFocusOnClick,
      leftFlipperAriaLabel,
      leftFlipperText,
      rightFlipperAriaLabel,
      rightFlipperText,
      showDots,
      showFlipper,
      showScrollBar
    }
  ] = useStyleOptions();

  const contentStyle = useMemo(() => ({ height }), [height]);

  return (
    <div className={classNames(rootClassName, (className || '') + '')} dir={dir}>
      <div
        className={classNames('react-film__main', { 'react-film__main--scrolling': scrolling })}
        style={contentStyle}
      >
        {!!numItems && scrollBarWidth !== '100%' && !!showFlipper && (
          <Flipper aria-label={leftFlipperAriaLabel} blurFocusOnClick={flipperBlurFocusOnClick} mode="left">
            {leftFlipperText}
          </Flipper>
        )}
        <Filmstrip>{children}</Filmstrip>
        {!!numItems && scrollBarWidth !== '100%' && !!showFlipper && (
          <Flipper aria-label={rightFlipperAriaLabel} blurFocusOnClick={flipperBlurFocusOnClick} mode="right">
            {rightFlipperText}
          </Flipper>
        )}
        {!!numItems && scrollBarWidth !== '100%' && !!showScrollBar && <ScrollBar />}
      </div>
      {!!numItems && scrollBarWidth !== '100%' && !!showDots && <Dots />}
    </div>
  );
};

// TODO: Move from styleSet to styleSheet.

BasicFilm.defaultProps = {
  children: undefined,
  className: undefined
};

BasicFilm.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string
};

export default BasicFilm;
