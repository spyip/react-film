const DOT_BOX_SIZE = 20;
const DOT_SIZE = 6;

const createDotsStyle = ({ dotBoxSize }) => ({
  '& .react-film__dots': {
    alignItems: 'center',
    bottom: 0,
    display: 'flex',
    height: dotBoxSize,
    justifyContent: 'center',
    listStyleType: 'none',
    margin: 0,
    padding: 0,
    width: '100%'
  }
});

const createDotStyle = ({ cursor, dotBoxSize, dotSize }) => ({
  '& .react-film__dot': {
    alignItems: 'center',
    display: 'flex',
    height: dotBoxSize,
    justifyContent: 'center',
    position: 'relative',
    width: dotBoxSize,

    '& .react-film__dot__input': {
      ...(cursor ? { cursor } : {}),

      height: '100%',
      left: 0,
      margin: 0,
      opacity: 0,
      position: 'absolute',
      top: 0,
      touchAction: 'none',
      userSelect: 'none',
      width: '100%'
    },

    '& .react-film__dot__dot': {
      background: 'rgba(0, 0, 0, .2)',
      borderRadius: dotSize / 2,
      height: dotSize,
      width: dotSize
    },

    '&:hover .react-film__dot__dot, & .react-film__dot__input:focus + .react-film__dot__dot': {
      background: 'rgba(0, 0, 0, .4)'
    },

    '& .react-film__dot__input:active + .react-film__dot__dot': {
      background: 'rgba(0, 0, 0, .8)'
    },

    '& .react-film__dot__input:checked:not(:active) + .react-film__dot__dot': {
      background: 'rgba(0, 0, 0, .6)'
    }
  }
});

const FLIPPER_BOX_WIDTH = 60;
const FLIPPER_SIZE = 40;

const createFlipperStyle = ({ autoHide, cursor, flipperBoxWidth, flipperSize }) => ({
  '& .react-film__flipper': {
    ...(cursor ? { cursor } : {}),

    background: 'Transparent',
    border: 0,
    height: '100%',
    outline: 0,
    overflow: 'hidden',
    position: 'absolute',
    top: 0,
    touchAction: 'none',
    transitionDuration: '300ms',
    userSelect: 'none',
    width: flipperBoxWidth,
    zIndex: 1,

    '&.react-film__flipper--left': {
      left: 0,
      transitionProperty: 'left',

      '& .react-film__flipper__slider': autoHide
        ? { left: (flipperBoxWidth + flipperSize) / -2, transitionProperty: 'left' }
        : { left: 0 },

      ...(autoHide
        ? {
            '&:focus:not(.react-film__flipper--hide) .react-film__flipper__slider': {
              left: 0,
              transitionDelay: '0s'
            }
          }
        : {})
    },

    '&.react-film__flipper--right': {
      right: 0,
      transitionProperty: 'right',

      '& .react-film__flipper__slider': autoHide
        ? { right: (flipperBoxWidth + flipperSize) / -2, transitionProperty: 'right' }
        : { right: 0 },

      ...(autoHide
        ? {
            '&:focus:not(.react-film__flipper--hide) .react-film__flipper__slider': {
              right: 0,
              transitionDelay: '0s'
            }
          }
        : {})
    },

    '& .react-film__flipper__slider': {
      alignItems: 'center',
      display: 'flex',
      height: '100%',
      justifyContent: 'center',
      position: 'absolute',
      top: 0,
      width: '100%',

      ...(autoHide
        ? {
            position: 'absolute',
            top: 0,
            transitionDelay: '1s',
            transitionDuration: '300ms'
          }
        : {})
    },

    '& .react-film__flipper__content': {
      backgroundColor: 'rgba(0, 0, 0, .6)',
      borderRadius: '50%',
      color: 'rgba(255, 255, 255, .6)',
      fontFamily: ['Consolas', 'monospace'].map(font => `'${font}'`).join(', '),
      fontSize: 16,
      height: flipperSize,
      lineHeight: `${flipperSize}px`,
      overflow: 'hidden',
      position: 'relative',
      transitionDuration: '100ms',
      transitionProperty: 'background-color',
      width: flipperSize
    },

    '&:hover, &:focus': {
      '& .react-film__flipper__content': {
        backgroundColor: 'rgba(0, 0, 0, .8)',
        color: 'rgba(255, 255, 255, .8)',
        transitionDuration: 0
      }
    },

    '&:active .react-film__flipper__content': {
      backgroundColor: 'Black',
      color: 'White',
      transitionDuration: 0
    }
  }
});

const createFilmstripStyle = () => ({
  '& .react-film__filmstrip': {
    MsOverflowStyle: 'none',
    overflowX: 'scroll',
    overflowY: 'hidden',
    overscrollBehaviorX: 'contain',
    position: 'relative',
    touchAction: 'manipulation',
    zIndex: 0,

    '&::-webkit-scrollbar': {
      display: 'none'
    },

    '& .react-film__filmstrip__list': {
      display: 'flex',
      listStyleType: 'none',
      margin: 0,
      padding: 0
    }
  }
});

const SCROLL_BAR_HEIGHT = 8;
const SCROLL_BAR_MARGIN = 4;

const createScrollBarStyle = ({ autoHide, scrollBarHeight, scrollBarMargin }) => ({
  '& .react-film__scroll-bar': {
    bottom: autoHide ? -30 : 0,
    boxSizing: 'border-box',
    padding: scrollBarMargin,
    position: 'absolute',
    transitionDelay: '1s',
    transitionDuration: '300ms',
    transitionProperty: 'bottom',
    width: '100%',

    '& .react-film__scroll-bar__handle': {
      backdropFilter: 'blur(4px)',
      background: 'rgba(255, 255, 255, .4)',
      borderRadius: scrollBarHeight / 2,
      height: scrollBarHeight
    }
  }
});

const createRootStyle = ({ autoHide, autoHideFlipperOnEdge }) => ({
  '& .react-film__root__content': {
    overflow: 'hidden',
    position: 'relative'
  },

  ...(autoHide
    ? {
        '&.react-film__root': {
          '&:hover, &.react-film__root--scrolling': {
            '& .react-film__scroll-bar': {
              bottom: 0,
              transitionDelay: '0s'
            },

            '& .react-film__flipper .react-film__flipper__slider': {
              transitionDelay: '0s'
            },

            '& .react-film__flipper.react-film__flipper--left': {
              ...(autoHideFlipperOnEdge
                ? {
                    '&:not(.react-film__flipper--hide) .react-film__flipper__slider': {
                      left: 0
                    }
                  }
                : {
                    '& .react-film__flipper__slider': {
                      left: 0
                    }
                  })
            },

            '& .react-film__flipper.react-film__flipper--right': {
              ...(autoHideFlipperOnEdge
                ? {
                    '&:not(.react-film__flipper--hide) .react-film__flipper__slider': {
                      right: 0
                    }
                  }
                : {
                    '& .react-film__flipper__slider': {
                      right: 0
                    }
                  })
            }
          }
        }
      }
    : {})
});

export default function createStyleSheet({
  autoHide = true,
  autoHideFlipperOnEdge = true,
  cursor = 'pointer',
  dotBoxSize = DOT_BOX_SIZE,
  dotSize = DOT_SIZE,
  flipperBoxWidth = FLIPPER_BOX_WIDTH,
  flipperSize = FLIPPER_SIZE,
  scrollBarHeight = SCROLL_BAR_HEIGHT,
  scrollBarMargin = SCROLL_BAR_MARGIN
} = {}) {
  return {
    ...createDotsStyle({ dotBoxSize }),
    ...createDotStyle({ cursor, dotBoxSize, dotSize }),
    ...createFilmstripStyle(),
    ...createFlipperStyle({ autoHide, autoHideFlipperOnEdge, cursor, flipperBoxWidth, flipperSize }),
    ...createRootStyle({ autoHide, autoHideFlipperOnEdge }),
    ...createScrollBarStyle({ autoHide, scrollBarHeight, scrollBarMargin })
  };
}
