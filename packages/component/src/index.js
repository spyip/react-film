import BasicFilm from './BasicFilm';
import Composer from './Composer';
import Context from './LegacyContext';
import createBasicStyleSet from './createBasicStyleSet';
import DeprecatedFilmStrip from './DeprecatedFilmStrip';
import Dots from './Dots';
import Filmstrip from './Filmstrip';
import Flipper from './Flipper';
import ReactFilm from './ReactFilm';
import ScrollBar from './ScrollBar';
import useDir from './hooks/useDir';
import useHeight from './hooks/useHeight';
import useIndex from './hooks/useIndex';
import useIndexFraction from './hooks/useIndexFraction';
import useItemContainerCallbackRef from './hooks/useItemContainerCallbackRef';
import useNumItems from './hooks/useNumItems';
import useScrollableCallbackRef from './hooks/useScrollableCallbackRef';
import useScrollBarPercentage from './hooks/useScrollBarPercentage';
import useScrollBarWidth from './hooks/useScrollBarWidth';
import useScrolling from './hooks/useScrolling';
import useScrollOneLeft from './hooks/useScrollOneLeft';
import useScrollOneRight from './hooks/useScrollOneRight';
import useScrollTo from './hooks/useScrollTo';
import useStyleOptions from './hooks/useStyleOptions';
import useStyleSetClassNames from './hooks/useStyleSetClassNames';

export default ReactFilm;

export {
  BasicFilm,
  Composer,
  Context,
  createBasicStyleSet,
  DeprecatedFilmStrip as FilmStrip,
  Dots,
  Filmstrip,
  Flipper,
  ScrollBar,
  useDir,
  useHeight,
  useIndex,
  useIndexFraction,
  useItemContainerCallbackRef,
  useNumItems,
  useScrollableCallbackRef,
  useScrollBarPercentage,
  useScrollBarWidth,
  useScrolling,
  useScrollOneLeft,
  useScrollOneRight,
  useScrollTo,
  useStyleOptions,
  useStyleSetClassNames
};

if (typeof document !== 'undefined' && document.head) {
  const meta = document.createElement('meta');

  meta.setAttribute('name', 'react-film');
  meta.setAttribute('content', `version=${process.env.npm_package_version}`);

  document.head.appendChild(meta);
}
