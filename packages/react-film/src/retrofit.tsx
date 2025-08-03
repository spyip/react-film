import parse from 'html-react-parser';
import React, { Fragment } from 'react';
// eslint-disable-next-line react/no-deprecated
import { render } from 'react-dom';
// @ts-expect-error no declaration
import ReactFilm from './ReactFilm.jsx';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function retrofit(element: HTMLElement, props: any) {
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
