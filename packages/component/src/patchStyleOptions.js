export default function normalizeStyleOptions({
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
} = {}) {
  const rtl = dir === 'rtl';

  return {
    autoCenter: autoCenter !== false,
    autoHide: autoHide !== false,
    autoHideFlipperOnEdge: autoHideFlipperOnEdge !== false,
    leftFlipperText: leftFlipperText || (rtl ? '>' : '<'),
    flipperBlurFocusOnClick: flipperBlurFocusOnClick === true,
    rightFlipperText: rightFlipperText || (rtl ? '<' : '>'),
    showDots: showDots !== false,
    showFlipper: showFlipper !== false,
    showScrollBar: showScrollBar !== false
  };
}
