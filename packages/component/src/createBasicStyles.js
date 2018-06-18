import { css } from 'glamor';

const CAROUSEL_CSS = css({
  overflow: 'hidden',
  position: 'relative'
});

const DOT_BOX_SIZE = 20;
const DOT_SIZE = 6;

const createDotsBoxCSS = ({ height }) => css({
  alignItems: 'center',
  bottom: 0,
  height,
  justifyContent: 'center',
  width: '100%'
});

const createDotsItemCSS = ({ boxSize, size }) => css({
  alignItems: 'center',
  display: 'flex',
  height: boxSize,
  justifyContent: 'center',
  width: boxSize,

  '& > input': {
    cursor: 'pointer',
    height: '100%',
    left: 0,
    margin: 0,
    opacity: 0,
    position: 'absolute',
    top: 0,
    width: '100%'
  },

  '& > div': {
    background: 'rgba(0, 0, 0, .2)',
    borderRadius: size / 2,
    height: size,
    width: size
  },

  '&:hover > div': {
    background: 'rgba(0, 0, 0, .4)'
  },

  '&:active > div': {
    background: 'rgba(0, 0, 0, .6)'
  },

  '& > input:checked + div': {
    background: 'rgba(0, 0, 0, .8)'
  }
});

const FLIPPER_BOX_WIDTH = 60;
const FLIPPER_SIZE = 40;

const createFlipperBoxCSS = ({ boxWidth, size }) => css({
  alignItems: 'center',
  background: 'Transparent',
  cursor: 'pointer',
  display: 'flex',
  height: '100%',
  position: 'absolute',
  justifyContent: 'center',
  top: 0,
  transitionDelay: '1s',
  transitionDuration: '300ms',
  width: boxWidth,

  '& > div': {
    backgroundColor: 'rgba(0, 0, 0, .2)',
    borderRadius: '50%',
    color: 'rgba(255, 255, 255, .6)',
    fontFamily: ['Consolas', 'monospace'].map(font => `'${ font }'`).join(', '),
    fontSize: 16,
    height: size,
    lineHeight: `${ size }px`,
    transitionProperty: 'background-color',
    transitionDuration: '100ms',
    width: size
  },

  '&:hover > div': {
    backgroundColor: 'rgba(0, 0, 0, .4)',
    color: 'rgba(255, 255, 255, .8)',
    transitionDuration: 0
  },

  '&:active > div': {
    backgroundColor: 'rgba(0, 0, 0, .6)',
    color: 'White',
    transitionDuration: 0
  }
});

const createLeftFlipperCSS = options => css({
  left: 0,
  transitionProperty: 'left'
}, createFlipperBoxCSS(options));

const createRightFlipperCSS = options => css({
  right: 0,
  transitionProperty: 'right'
}, createFlipperBoxCSS(options));

const SCROLL_BAR_HEIGHT = 8;
const SCROLL_BAR_MARGIN = 4;

const createScrollBarBoxCSS = ({ height, margin }) => css({
  bottom: 0,
  padding: margin,
  position: 'absolute',
  transitionDelay: '1s',
  transitionDuration: '300ms',
  transitionProperty: 'bottom',
  width: '100%'
});

const createScrollBarHandlerCSS = ({ height, margin }) => css({
  backdropFilter: 'blur(4px)',
  background: 'rgba(255, 255, 255, .4)',
  borderRadius: height / 2,
  height: height
});

export default function ({
  autoHide        = true,
  dotBoxSize      = DOT_BOX_SIZE,
  dotSize         = DOT_SIZE,
  flipperBoxWidth = FLIPPER_BOX_WIDTH,
  flipperSize     = FLIPPER_SIZE,
  scrollBarHeight = SCROLL_BAR_HEIGHT,
  scrollBarMargin = SCROLL_BAR_MARGIN
} = {}) {
  const styles = {
    carousel        : CAROUSEL_CSS,
    dotsBox         : createDotsBoxCSS({ height: dotBoxSize }),
    dotsItem        : createDotsItemCSS({ boxSize: dotBoxSize, size: dotSize }),
    leftFlipper     : createLeftFlipperCSS({ boxWidth: flipperBoxWidth, size: flipperSize }),
    rightFlipper    : createRightFlipperCSS({ boxWidth: flipperBoxWidth, size: flipperSize }),
    scrollBarBox    : createScrollBarBoxCSS({ height: scrollBarHeight, margin: scrollBarMargin }),
    scrollBarHandler: createScrollBarHandlerCSS({ height: scrollBarHeight, margin: scrollBarMargin })
  };

  // This is for overriding existing rules with auto-hide CSS transitions
  if (autoHide) {
    const flipperOverrides = {
      position: 'absolute',
      top: 0,
      transitionDelay: '1s',
      transitionDuration: '300ms'
    };

    styles.leftFlipper = css(styles.leftFlipper, {
      ...flipperOverrides,
      left: -50,
      transitionProperty: 'left'
    });

    styles.rightFlipper = css(styles.rightFlipper, {
      ...flipperOverrides,
      right: -50,
      transitionProperty: 'right'
    });

    styles.scrollBarBox = css(styles.scrollBarBox, {
      bottom: -30,
      transitionDelay: '1s',
      transitionDuration: '300ms',
      transitionProperty: 'bottom'
    });

    // The auto-hide state is defined in arch-style (carousel) for its `hover` pseudo class
    styles.carousel = css(styles.carousel, {
      '&:hover, &.scrolling': {
        [`& .${ styles.scrollBarBox + '' }, & .${ styles.leftFlipper + '' }, & .${ styles.rightFlipper + '' }`]: {
          // Controls show up as soon as the user hover on it
          transitionDelay: '0s'
        },

        [`& .${ styles.scrollBarBox + '' }`]: {
          bottom: 0
        },

        [`& .${ styles.leftFlipper + '' }`]: {
          left: 0
        },

        [`& .${ styles.rightFlipper + '' }`]: {
          right: 0
        }
      }
    });
  }

  return styles;
}
