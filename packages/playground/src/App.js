import React from 'react';
import { css } from 'glamor';

import BasicFilm, { createBasicStyleSet } from 'react-film';

const SMALL_FILM_CSS = css({
  maxWidth: 474 * 2
});

const LIST_FILM_ITEM_CSS = css({
  width: 200
});

const styleSet = createBasicStyleSet({ autoHide: false });
const myStyleSet = {
  ...styleSet,
  scrollBarHandler: styleSet.scrollBarHandler + ' ' + css({ backgroundColor: 'Red' })
};

function pad(value, count = 2, padding = '0') {
  value += '';
  count -= value.length;

  while (--count >= 0) {
    value = padding + value;
  }

  return value;
}

function randomID() {
  return Math.random().toString(36).substr(2, 5);
}

function wrap(value, from, to) {
  const width = to - from + 1;

  while (value < from) {
    value += width;
  }

  while (value > to) {
    value -= width;
  }

  return value;
}

export default class extends React.Component {
  constructor(props) {
    super(props);

    this.handleAppendItem = this.handleAppendItem.bind(this);
    this.handlePrependItem = this.handlePrependItem.bind(this);
    this.handleRandomKeyClick = this.handleRandomKeyClick.bind(this);

    this.state = {
      items: ['01', '02', '03'],
      key: randomID()
    };
  }

  handleAppendItem() {
    this.setState(({ items }) => {
      return {
        items: [...items, pad(wrap((+items[items.length - 1] || 0) + 1, 1, 11))]
      };
    });
  }

  handlePrependItem() {
    this.setState(({ items }) => {
      return {
        items: [pad(wrap((+items[0] || 0) - 1, 1, 11)), ...items]
      };
    });
  }

  handleRandomKeyClick() {
    this.setState(() => ({ key: randomID() }));
  }

  render() {
    const {
      state: { items, key }
    } = this;

    return (
      <div>
        <p>
          <button onClick={ this.handleRandomKeyClick }>Re-create component</button>
        </p>
        <p>Qui ad aute ipsum occaecat labore nostrud veniam ea Lorem proident esse cillum excepteur nulla. Minim pariatur deserunt consectetur adipisicing dolor velit occaecat velit ullamco aliquip. Eu incididunt velit ipsum ad voluptate amet irure ut nostrud nostrud culpa ullamco dolore. Et eiusmod eiusmod ad excepteur sunt. Veniam ipsum eiusmod tempor in.</p>
        <p>Ut incididunt labore elit deserunt ullamco consequat duis id proident eu aute. Ut ea do id magna id officia consequat aliqua ex qui deserunt anim nisi. Ipsum enim laboris anim ipsum deserunt ut occaecat qui. Do mollit reprehenderit proident sunt excepteur aliqua est ut qui exercitation aliquip consequat duis enim.</p>
        <p>Ut anim commodo nisi cillum tempor. Cillum adipisicing velit exercitation pariatur dolor exercitation mollit deserunt eiusmod ad id sit voluptate. Sit nulla et deserunt consequat culpa aliquip adipisicing. Velit ea id et id occaecat proident proident aliqua nostrud reprehenderit do aliqua. Irure nisi irure excepteur in eiusmod adipisicing nisi consectetur consectetur sit.</p>
        <p>Dolore ad sit voluptate esse exercitation cupidatat. Commodo excepteur sunt magna do sunt fugiat laboris non in Lorem proident aliqua tempor. Exercitation est ad laborum eu elit commodo dolore. Enim sint quis do incididunt duis minim veniam Lorem mollit ex nostrud deserunt. Pariatur fugiat sint eiusmod voluptate officia.</p>
        <p>In elit anim elit ea ex. Voluptate qui id laborum sit duis officia enim est velit sunt do. Amet aliqua occaecat laboris pariatur. Veniam eu reprehenderit ea esse officia esse dolor laborum deserunt. Laboris occaecat et aute nostrud consequat amet elit adipisicing non nostrud minim id voluptate sunt. Qui consequat veniam occaecat veniam dolor ex consequat. Ullamco elit ad commodo consequat ullamco magna aliqua nulla deserunt officia reprehenderit irure.</p>
        { !!key &&
          <BasicFilm height={ 316 } key={ `${ key }-a` }>
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
          </BasicFilm>
        }
        { !!key &&
          <BasicFilm className={ SMALL_FILM_CSS + '' } height={ 316 } key={ `${ key }-b` }>
            <img alt="Cat 01" src="image/01.jpg" />
            <img alt="Cat 02" src="image/02.jpg" />
          </BasicFilm>
        }
        { !!key &&
          <BasicFilm
            autoCenter={ false }
            autoHide={ false }
            height={ 316 }
            key={ `${ key }-c` }
            leftFlipperText="L"
            rightFlipperText="R"
            styleSet={ myStyleSet }
          >
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
          </BasicFilm>
        }
        { !!key &&
          <BasicFilm key={ `${ key }-d` } />
        }
        { !!key &&
          <BasicFilm key={ `${ key }-e` }>
            <ol className={ LIST_FILM_ITEM_CSS }>
              <li>A</li>
              <li>B</li>
              <li>C</li>
            </ol>
            <ol className={ LIST_FILM_ITEM_CSS }>
              <li>A</li>
              <li>B</li>
              <li>C</li>
            </ol>
            <ol className={ LIST_FILM_ITEM_CSS }>
              <li>A</li>
              <li>B</li>
              <li>C</li>
            </ol>
            <ol className={ LIST_FILM_ITEM_CSS }>
              <li>A</li>
              <li>B</li>
              <li>C</li>
            </ol>
            <ol className={ LIST_FILM_ITEM_CSS }>
              <li>A</li>
              <li>B</li>
              <li>C</li>
            </ol>
            <ol className={ LIST_FILM_ITEM_CSS }>
              <li>A</li>
              <li>B</li>
              <li>C</li>
            </ol>
            <ol className={ LIST_FILM_ITEM_CSS }>
              <li>A</li>
              <li>B</li>
              <li>C</li>
            </ol>
          </BasicFilm>
        }
        { !!key &&
          <BasicFilm key={ `${ key }-f` }>
            <ul className={ LIST_FILM_ITEM_CSS }>
              <li>A</li>
              <li>B</li>
              <li>C</li>
            </ul>
            <ul className={ LIST_FILM_ITEM_CSS }>
              <li>A</li>
              <li>B</li>
              <li>C</li>
            </ul>
            <ul className={ LIST_FILM_ITEM_CSS }>
              <li>A</li>
              <li>B</li>
              <li>C</li>
            </ul>
            <ul className={ LIST_FILM_ITEM_CSS }>
              <li>A</li>
              <li>B</li>
              <li>C</li>
            </ul>
            <ul className={ LIST_FILM_ITEM_CSS }>
              <li>A</li>
              <li>B</li>
              <li>C</li>
            </ul>
            <ul className={ LIST_FILM_ITEM_CSS }>
              <li>A</li>
              <li>B</li>
              <li>C</li>
            </ul>
          </BasicFilm>
        }
        <BasicFilm>
          { items.map(item =>
            <img alt={ `Cat ${ item }` } src={ `image/${ item }.jpg` } />
          ) }
        </BasicFilm>
        <div>
          <button onClick={ this.handleAppendItem }>Append a cat</button>
          <button onClick={ this.handlePrependItem }>Prepend a cat</button>
        </div>
        <p>Deserunt mollit elit laborum quis commodo magna. Nulla ad amet pariatur exercitation sint dolore. Mollit in in duis deserunt dolore anim. Qui fugiat in sit ut do voluptate ipsum nostrud. Ad culpa officia sunt enim. Adipisicing ut dolore commodo fugiat. Do Lorem occaecat nisi nulla fugiat consectetur exercitation est sit et laborum.</p>
        <p>Sunt nostrud amet commodo consectetur culpa incididunt voluptate. Mollit tempor tempor nostrud ad non excepteur reprehenderit ea. Cillum mollit reprehenderit mollit minim eiusmod deserunt reprehenderit. Sit cupidatat laborum dolore et magna duis Lorem aute sint fugiat sunt sunt. Sit non nostrud aliquip et nisi ad ullamco aute proident enim sit sit consectetur velit. Enim excepteur voluptate culpa anim laborum commodo eu excepteur.</p>
        <p>Mollit fugiat proident consectetur excepteur mollit. Commodo ipsum laboris dolor voluptate amet eu amet excepteur quis incididunt quis veniam. Laborum anim ex nisi consectetur commodo adipisicing elit minim cillum fugiat. Id non amet adipisicing non ipsum pariatur. Ad mollit ea culpa enim nostrud exercitation occaecat velit aute esse. Reprehenderit sint et duis veniam excepteur duis irure aliquip amet. Deserunt ullamco incididunt Lorem excepteur est ea ipsum.</p>
        <p>Excepteur et culpa fugiat occaecat labore cillum commodo aute aliqua est occaecat incididunt commodo voluptate. Non cillum aliquip duis voluptate mollit irure in. Cillum cupidatat voluptate ullamco eiusmod amet officia laboris commodo occaecat.</p>
        <p>Minim sint tempor ipsum aute. Consequat est ipsum esse commodo dolore adipisicing. Occaecat commodo cillum ut magna cupidatat reprehenderit nisi. Non consequat aliqua adipisicing sit eiusmod ipsum occaecat. Deserunt consectetur deserunt laborum magna dolor duis ut.</p>
      </div>
    );
  }
}
