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
          <img alt="Cat 01" src="image/01.jpg" />
          <img alt="Cat 02" src="image/02.jpg" />
          <img alt="Cat 03" src="image/03.jpg" />
          <img alt="Cat 04" src="image/04.jpg" />
          <img alt="Cat 05" src="image/05.jpg" />
          <img alt="Cat 06" src="image/06.jpg" />
          <img alt="Cat 07" src="image/07.jpg" />
          <img alt="Cat 08" src="image/08.jpg" />
          <img alt="Cat 09" src="image/09.jpg" />
          <img alt="Cat 10" src="image/10.jpg" />
          <img alt="Cat 11" src="image/11.jpg" />
        </Film>
      </div>
    );
  }
}

export default App;
