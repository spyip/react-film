import BasicFilm from 'react-film';
import HTMLReactParser from 'html-react-parser';
import React from 'react';
import ReactDOM from 'react-dom';

function retrofit(element, props) {
  const newElement = document.createElement('div');

  newElement.className = 'react-film';
  element.parentElement.replaceChild(newElement, element);

  ReactDOM.render(
    React.createElement(
      BasicFilm,
      props,
      ...[].map.call(element.children, ({ outerHTML }) => HTMLReactParser(outerHTML))
    ),
    newElement
  );
}

export { retrofit };
