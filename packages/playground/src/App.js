import { css } from 'glamor';
import React, { Component } from 'react';
import Film from 'react-film';

const FILM_CSS = css({
  height: 316,
  width: 1024
});

class App extends Component {
  render() {
    return (
      <div>
        <Film className={ FILM_CSS + '' }>
          <img src="image/01.jpg" />
          <img src="image/02.jpg" />
          <img src="image/03.jpg" />
          <img src="image/04.jpg" />
          <img src="image/05.jpg" />
          <img src="image/06.jpg" />
          <img src="image/07.jpg" />
          <img src="image/08.jpg" />
          <img src="image/09.jpg" />
          <img src="image/10.jpg" />
          <img src="image/11.jpg" />
        </Film>
      </div>
    );
  }
}

export default App;
