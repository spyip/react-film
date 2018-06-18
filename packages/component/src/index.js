import BasicFilm from './BasicFilm';
import createBasicStyleSet from './createBasicStyleSet';
import Dots from './Dots';
import FilmComposer from './FilmComposer';
import FilmContext from './FilmContext';
import FilmStrip from './FilmStrip';
import Flipper from './Flipper';
import ScrollBar from './ScrollBar';

export default BasicFilm

export {
  createBasicStyleSet,
  Dots,
  FilmComposer,
  FilmContext,
  FilmStrip,
  Flipper,
  ScrollBar
}

if (document && document.head) {
  const meta = document.createElement('meta');

  meta.setAttribute('name', 'react-film');
  meta.setAttribute('content', `version=${ VERSION }`);

  document.head.appendChild(meta);
}
