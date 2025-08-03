import BasicFilm from './BasicFilm.jsx';
import Composer from './Composer.jsx';
import createBasicStyleSet from './createBasicStyleSet.js';
import DeprecatedFilmStrip from './DeprecatedFilmStrip.jsx';
import Dots from './Dots.jsx';
import Filmstrip from './Filmstrip.jsx';
import Flipper from './Flipper.jsx';
import useDir from './hooks/useDir.js';
import useHeight from './hooks/useHeight.js';
import useIndex from './hooks/useIndex.js';
import useIndexFraction from './hooks/useIndexFraction.js';
import useItemContainerCallbackRef from './hooks/useItemContainerCallbackRef.js';
import useNumItems from './hooks/useNumItems.js';
import useScrollableCallbackRef from './hooks/useScrollableCallbackRef.js';
import useScrollBarPercentage from './hooks/useScrollBarPercentage.js';
import useScrollBarWidth from './hooks/useScrollBarWidth.js';
import useScrolling from './hooks/useScrolling.js';
import useScrollOneLeft from './hooks/useScrollOneLeft.js';
import useScrollOneRight from './hooks/useScrollOneRight.js';
import useScrollTo from './hooks/useScrollTo.js';
import useStyleOptions from './hooks/useStyleOptions.js';
import useStyleSetClassNames from './hooks/useStyleSetClassNames.js';
import Context from './LegacyContext.js';
import ReactFilm from './ReactFilm.jsx';
import ScrollBar from './ScrollBar.jsx';

if (typeof document !== 'undefined' && document.head) {
  const meta = document.createElement('meta');

  meta.setAttribute('name', 'react-film');

  // eslint-disable-next-line no-undef
  meta.setAttribute('content', `version=${process.env.npm_package_version}`);

  document.head.appendChild(meta);
}

export { default as retrofit } from './retrofit.tsx';

export {
  BasicFilm,
  Composer,
  Context,
  createBasicStyleSet,
  Dots,
  DeprecatedFilmStrip as FilmStrip,
  Filmstrip,
  Flipper,
  ReactFilm,
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
