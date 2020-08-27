const DOT_BOX_SIZE = 20;
const DOT_SIZE = 6;

const FLIPPER_BOX_WIDTH = 60;
const FLIPPER_SIZE = 40;

const SCROLL_BAR_HEIGHT = 8;
const SCROLL_BAR_MARGIN = 4;

export default function normalizeStyleOptions({
  autoCenter,
  autoHide,
  autoHideFlipperOnEdge,
  cursor,
  dir,
  dotBoxSize,
  dotSize,
  flipperBlurFocusOnClick,
  flipperBoxWidth,
  flipperSize,
  leftFlipperText,
  rightFlipperText,
  scrollBarHeight,
  scrollBarMargin,
  showDots,
  showFlipper,
  showScrollBar
} = {}) {
  const rtl = dir === 'rtl';

  return {
    autoCenter: autoCenter !== false,
    autoHide: autoHide !== false,
    autoHideFlipperOnEdge: autoHideFlipperOnEdge !== false,
    cursor: typeof cursor === 'undefined' ? 'pointer' : cursor,
    dotBoxSize: typeof dotBoxSize === 'number' ? dotBoxSize : DOT_BOX_SIZE,
    dotSize: typeof dotSize === 'number' ? dotSize : DOT_SIZE,
    flipperBlurFocusOnClick: flipperBlurFocusOnClick === true,
    flipperBoxWidth: typeof flipperBoxWidth === 'number' ? flipperBoxWidth : FLIPPER_BOX_WIDTH,
    flipperSize: typeof flipperSize === 'number' ? flipperSize : FLIPPER_SIZE,
    leftFlipperText: leftFlipperText || (rtl ? '>' : '<'),
    rightFlipperText: rightFlipperText || (rtl ? '<' : '>'),
    scrollBarHeight: typeof scrollBarHeight === 'number' ? scrollBarHeight : SCROLL_BAR_HEIGHT,
    scrollBarMargin: typeof scrollBarMargin === 'number' ? scrollBarMargin : SCROLL_BAR_MARGIN,
    showDots: showDots !== false,
    showFlipper: showFlipper !== false,
    showScrollBar: showScrollBar !== false
  };
}
