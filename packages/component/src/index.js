import BasicFilm from './BasicFilm';
import Composer from './Composer';
import Context from './LegacyContext';
import createStyleSheet from './createStyleSheet';
import Dots from './Dots';
import Filmstrip from './FilmStrip';
import Flipper from './Flipper';
import ReactFilm from './ReactFilm';
import ScrollBar from './ScrollBar';
import useDir from './hooks/useDir';
import useHeight from './hooks/useHeight';
import useIndex from './hooks/useIndex';
import useIndexFraction from './hooks/useIndexFraction';
import useNumItems from './hooks/useNumItems';
import useScrollBarPercentage from './hooks/useScrollBarPercentage';
import useScrollBarWidth from './hooks/useScrollBarWidth';
import useScrolling from './hooks/useScrolling';
import useScrollOneLeft from './hooks/useScrollOneLeft';
import useScrollOneRight from './hooks/useScrollOneRight';
import useScrollTo from './hooks/useScrollTo';
import useStyleOptions from './hooks/useStyleOptions';
import useStyleSheetClassName from './hooks/useStyleSheetClassName';

export default ReactFilm;

export {
  BasicFilm,
  Composer,
  Context,
  createStyleSheet,
  Dots,
  Filmstrip as FilmStrip,
  Filmstrip,
  Flipper,
  ScrollBar,
  useDir,
  useHeight,
  useIndex,
  useIndexFraction,
  useNumItems,
  useScrollBarPercentage,
  useScrollBarWidth,
  useScrolling,
  useScrollOneLeft,
  useScrollOneRight,
  useScrollTo,
  useStyleOptions,
  useStyleSheetClassName
};

if (typeof document !== 'undefined' && document.head) {
  const meta = document.createElement('meta');

  meta.setAttribute('name', 'react-film');
  meta.setAttribute('content', `version=${process.env.npm_package_version}`);

  document.head.appendChild(meta);
}
