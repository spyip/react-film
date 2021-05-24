/* eslint no-magic-numbers: "off" */

import patchStyleOptions from './patchStyleOptions';

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

    '& .react-film__dot__handle': {
      background: 'rgba(0, 0, 0, .2)',
      borderRadius: dotSize / 2,
      height: dotSize,
      width: dotSize
    },

    '&:hover .react-film__dot__handle, & .react-film__dot__input:focus + .react-film__dot__handle': {
      background: 'rgba(0, 0, 0, .4)'
    },

    '& .react-film__dot__input:active + .react-film__dot__handle': {
      background: 'rgba(0, 0, 0, .8)'
    },

    '& .react-film__dot__input:checked:not(:active) + .react-film__dot__handle': {
      background: 'rgba(0, 0, 0, .6)'
    }
  }
});

const createFlipperStyle = ({ cursor, flipperBoxWidth, flipperSize }) => ({
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
    userSelect: 'none',
    width: flipperBoxWidth,
    zIndex: 1,

    '&.react-film__flipper--left': {
      left: 0,

      '& .react-film__flipper__slider': {
        left: 0
      }
    },

    '&.react-film__flipper--right': {
      right: 0,

      '& .react-film__flipper__slider': {
        right: 0
      }
    },

    '& .react-film__flipper__slider': {
      alignItems: 'center',
      display: 'flex',
      height: '100%',
      justifyContent: 'center',
      position: 'absolute',
      top: 0,
      width: '100%'
    },

    '& .react-film__flipper__body': {
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
      '& .react-film__flipper__body': {
        backgroundColor: 'rgba(0, 0, 0, .8)',
        color: 'rgba(255, 255, 255, .8)',
        transitionDuration: 0
      }
    },

    '&:active .react-film__flipper__body': {
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

const createRootStyle = ({ autoHide, autoHideFlipperOnEdge, flipperBoxWidth, flipperSize }) => ({
  '& .react-film__main': {
    overflow: 'hidden',
    position: 'relative',

    ...(autoHide
      ? {
          '&:hover, &.react-film__main--scrolling': {
            '& .react-film__main__slider': {
              transitionDelay: '0s',

              '&.react-film__main__slider--bottom': {
                bottom: 0
              },

              '&.react-film__main__slider--left': {
                [autoHideFlipperOnEdge ? '&:not(.react-film__main__slider--hide)' : '&']: {
                  left: 0
                }
              },

              '&.react-film__main__slider--right': {
                [autoHideFlipperOnEdge ? '&:not(.react-film__main__slider--hide)' : '&']: {
                  right: 0
                }
              }
            }
          },

          '& .react-film__main__overlay:focus .react-film__main__slider:not(.react-film__main__slider--hide)': {
            transitionDelay: '0s',

            '&.react-film__main__slider--left': {
              left: 0
            },

            '&.react-film__main__slider--right': {
              right: 0
            }
          },

          '& .react-film__main__slider': {
            transitionDelay: '1s',
            transitionDuration: '300ms',

            '&.react-film__main__slider--left': {
              left: (flipperBoxWidth + flipperSize) / -2,
              transitionProperty: 'left'
            },

            '&.react-film__main__slider--right': {
              right: (flipperBoxWidth + flipperSize) / -2,
              transitionProperty: 'right'
            }
          }
        }
      : {})
  }
});

export default function createBasicStyleSet(styleOptions) {
  styleOptions = patchStyleOptions(styleOptions);

  return {
    root: {
      ...createDotsStyle(styleOptions),
      ...createDotStyle(styleOptions),
      ...createFilmstripStyle(styleOptions),
      ...createFlipperStyle(styleOptions),
      ...createRootStyle(styleOptions),
      ...createScrollBarStyle(styleOptions)
    }
  };
}
