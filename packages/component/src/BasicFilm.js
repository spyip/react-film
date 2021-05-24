import classNames from 'classnames';
import PropTypes from 'prop-types';
import React, { useMemo } from 'react';

import Dots from './Dots';
import Filmstrip from './Filmstrip';
import Flipper from './Flipper';
import ScrollBar from './ScrollBar';
import useDir from './hooks/useDir';
import useHeight from './hooks/useHeight';
import useNumItems from './hooks/useNumItems';
import useScrollBarWidth from './hooks/useScrollBarWidth';
import useScrolling from './hooks/useScrolling';
import useStyleOptions from './hooks/useStyleOptions';
import useStyleSetClassNames from './hooks/useStyleSetClassNames';

const BasicFilm = ({ children, className }) => {
  const [dir] = useDir();
  const [height] = useHeight();
  const [numItems] = useNumItems();
  const [scrollBarWidth] = useScrollBarWidth();
  const [scrolling] = useScrolling();
  const [{ root: rootClassName }] = useStyleSetClassNames();
  const [{ flipperBlurFocusOnClick, leftFlipperText, rightFlipperText, showDots, showFlipper, showScrollBar }] =
    useStyleOptions();

  const contentStyle = useMemo(() => ({ height }), [height]);

  return (
    <div className={classNames(rootClassName, (className || '') + '')} dir={dir}>
      <div
        className={classNames('react-film__main', { 'react-film__main--scrolling': scrolling })}
        style={contentStyle}
      >
        {!!numItems && scrollBarWidth !== '100%' && !!showFlipper && (
          <Flipper blurFocusOnClick={flipperBlurFocusOnClick} mode="left">
            {leftFlipperText}
          </Flipper>
        )}
        <Filmstrip>{children}</Filmstrip>
        {!!numItems && scrollBarWidth !== '100%' && !!showFlipper && (
          <Flipper blurFocusOnClick={flipperBlurFocusOnClick} mode="right">
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
