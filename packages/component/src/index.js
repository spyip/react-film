import BasicFilm from './BasicFilm';
import Composer from './Composer';
import Context from './Context';
import createBasicStyleSet from './createBasicStyleSet';
import Dots from './Dots';
import FilmStrip from './FilmStrip';
import Flipper from './Flipper';
import ScrollBar from './ScrollBar';

export default BasicFilm;

export { Composer, Context, createBasicStyleSet, Dots, FilmStrip, Flipper, ScrollBar };

if (typeof document !== 'undefined' && document.head) {
  const meta = document.createElement('meta');

  meta.setAttribute('name', 'react-film');
  meta.setAttribute('content', `version=${process.env.npm_package_version}`);

  document.head.appendChild(meta);
}
