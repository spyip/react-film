import parse from 'html-react-parser';
import React, { Fragment } from 'react';
// Do not use named import: `render()` is removed from React 19 and bundlers (e.g. Webpack) fail on missing named export.
import ReactDOM from 'react-dom';
import ReactFilm from './ReactFilm.jsx';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function retrofit(element: HTMLElement, props: any) {
  // `render()` is only available in React 16.8 to 18. It was removed in React 19.
  // eslint-disable-next-line react/no-deprecated
  const { render } = ReactDOM;

  if (typeof render !== 'function') {
    throw new Error(
      'react-film: retrofit() requires ReactDOM.render(), which is not available in React 19 or later. Please render <ReactFilm> using createRoot() from "react-dom/client" instead.'
    );
  }

  const newElement = document.createElement('div');

  newElement.className = 'react-film';

  element.replaceWith(newElement);

  // TODO: Fix for react-dom/client.
  render(
    <ReactFilm {...props}>
      {Array.from(element.children).map(({ outerHTML }, index) => (
        <Fragment key={index}>{parse(outerHTML)}</Fragment>
      ))}
    </ReactFilm>,
    newElement
  );
}

export default retrofit;
