/** @jest-environment @happy-dom/jest-environment */

import { scenario } from '@testduet/given-when-then';
import React from 'react';
import { create } from 'react-test-renderer';
import ReactFilm from '../ReactFilm.jsx';

scenario('simple scenario', bdd => {
  bdd
    .given(
      'an <App>',
      () =>
        // WHEN: Render <ReactFilm>.
        function App() {
          return (
            <ReactFilm height={316} flipperBlurFocusOnClick={true}>
              <img alt="Cat 01" src="../image/01.jpg" />
              <img alt="Cat 02" src="../image/02.jpg" />
              <img alt="Cat 03" src="../image/03.jpg" />
            </ReactFilm>
          );
        }
    )
    .when('rendered', App => create(<App />))
    .then('should have 3 elements', (_, renderer) =>
      // THEN: It should render 3 images.
      expect(renderer.root.findAllByType('img')).toHaveProperty('length', 3)
    );
});
