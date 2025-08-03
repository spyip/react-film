/** @jest-environment @happy-dom/jest-environment */

const React = require('react');
const { ReactFilm } = require('react-film');
const { create } = require('react-test-renderer');
const { scenario } = require('@testduet/given-when-then');

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
