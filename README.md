# react-film

[![npm version](https://badge.fury.io/js/react-film.svg)](https://badge.fury.io/js/react-film) [![Build Status](https://travis-ci.org/spyip/react-film.svg?branch=master)](https://travis-ci.org/spyip/react-film)

HTML component for showing carousel just like a film strip. It is lightweight and focus on performance and accessibility.

Although this component is built on top of React, it can be used outside of a React project.

This project scaffolding is from [react-component-template](https://github.com/compulim/react-component-template).

# Demo

Try out our demo at https://spyip.github.io/react-film/.

# Sample code

## Retrofitting DOM element without React

You can use `react-film` to retrofit existing DOM element outside of a React project.

Every children in the target element will become an individual carousel item.

```html
<!DOCTYPE html>
<html lang="en-US">
  <head>
    <title>React Film</title>
    <script src="https://unpkg.com/react-film@latest/umd/react-film.production.min.js"></script>
  </head>
  <body>
    <div id="film">
      <img alt="Cat 01" src="image/01.jpg" />
      <img alt="Cat 02" src="image/02.jpg" />
      <img alt="Cat 03" src="image/03.jpg" />
    </div>
    <script>
      window.ReactFilm.retrofit(
        document.getElementById('film'),
        { height: 316 }
      );
    </script>
  </body>
</html>
```

## Using in React projects

First, import `react-film` on your JSX file, namely `BasicFilm`.

```js
import BasicFilm from 'react-film';
```

Then, instantiate a component using `BasicFilm`.

```jsx
<BasicFilm height={ 316 }>
  <img alt="Cat 01" src="image/01.jpg" />
  <img alt="Cat 02" src="image/02.jpg" />
  <img alt="Cat 03" src="image/03.jpg" />
</BasicFilm>
```

> Note: we need to specify `height` here because there are no CSS rule one can use to [hide scroll bars in Firefox](https://stackoverflow.com/questions/19580366/hide-scrollbar-in-firefox).

## Customization

When we design `react-film`, customization is our top priority. From shallow to deep, we support these customizations:

* [Toggle features](#props) (auto-center/dots/flipper/scrollbar)
* [Simple styling](#presets-for-style-set) each feature (dot size, flipper width, etc)
* [Replace or enhance](#basic-style-set) themeing for each feature
* [Add new controls](#context), including headless component like auto-play
* [Rebuild](#deep-customization) the whole component, without forking the code

# Props

You can control `<BasicFilm>` using props listed below.

| Name                        | Default                                                                                                    | Description                                                                                                                                |
|-----------------------------|------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------|
| `autoCenter`                | `true`                                                                                                     | `true` will enable auto-center after scroll stopped for a second, otherwise, `false`                                                       |
| `autoHide`                  | `true`                                                                                                     | `true` to auto hide controls after pointer leave or scroll stopped, otherwise, `false` (surfaced from [style set](#presets-for-style-set)) |
| `dir`                       | `'ltr'`                                                                                                    | `'ltr'` for left-to-right mode. `'rtl'` for right-to-left mode.                                                                            |
| `flipperBlurFocusOnClick`   | `false`                                                                                                    | `true` will force the carousel flippers to blur on click, otherwise, `false`            
| `height`                    |                                                                                                            | Height of the carousel, in `number` (required for Firefox)                                                                                 |
| `leftFlipperText`           | `'<'`                                                                                                      | Text for the left flipper                                                                                                                  |
| `rightFlipperText`          | `'>'`                                                                                                      | Text for the right flipper                                                                                                                 |
| `showDots`                  | `true`                                                                                                     | `true` to show dots below the carousel, otherwise, `false`                                                                                 |
| `showFlipper`               | `true`                                                                                                     | `true` to show flippers (side buttons), otherwise, `false`                                                                                 |
| `showScrollBar`             | `true`                                                                                                     | `true` to show scroll bar, otherwise, `false`                                                                                              |
| `styleSet.carousel`         | [`'css-*'`](https://github.com/threepointone/glamor/blob/master/docs/howto.md#apply-a-style-to-an-element) | Class name for carousel component                                                                                                          |
| `styleSet.dotsBox`          | [`'css-*'`](https://github.com/threepointone/glamor/blob/master/docs/howto.md#apply-a-style-to-an-element) | Class name for dots container                                                                                                              |
| `styleSet.dotsItem`         | [`'css-*'`](https://github.com/threepointone/glamor/blob/master/docs/howto.md#apply-a-style-to-an-element) | Class name for every dot                                                                                                                   |
| `styleSet.leftFlipper`      | [`'css-*'`](https://github.com/threepointone/glamor/blob/master/docs/howto.md#apply-a-style-to-an-element) | Class name for left flipper                                                                                                                |
| `styleSet.rightFlipper`     | [`'css-*'`](https://github.com/threepointone/glamor/blob/master/docs/howto.md#apply-a-style-to-an-element) | Class name for right flipper                                                                                                               |
| `styleSet.scrollBarBox`     | [`'css-*'`](https://github.com/threepointone/glamor/blob/master/docs/howto.md#apply-a-style-to-an-element) | Class name for scroll bar container                                                                                                        |
| `styleSet.scrollBarHandler` | [`'css-*'`](https://github.com/threepointone/glamor/blob/master/docs/howto.md#apply-a-style-to-an-element) | Class name for scroll bar handler                                                                                                          |

## Basic style set

To better assist designer to style the component, we introduce style set, a clean way to override or replace existing styles. This help designers to create their unique styles without the need to overcome the effect of existing styles.

To start with the basic style set, just copy the following code:

```css
.my-scroll-bar-class { background: Red; }
```

```js
import BasicFilm, { createBasicStyleSet } from 'react-film';

const originalStyleSet = createBasicStyleSet();
const myStyleSet = {
  ...originalStyleSet,
  scrollBarHandler: originalStyleSet.scrollBarHandler + ' my-scroll-bar-class'
};

export default props =>
  <BasicFilm styleSet={ myStyleSet }>
    <img alt="Cat 01" src="image/01.jpg" />
    <img alt="Cat 02" src="image/02.jpg" />
    <img alt="Cat 03" src="image/03.jpg" />
  </BasicFilm>
```

### Style using glamor

If you are familiar with [`glamor`](https://github.com/threepointone/glamor/), you can also use it to style.

```js
import { css } from 'glamor';
import BasicFilm, { createBasicStyleSet } from 'react-film';

const originalStyleSet = createBasicStyleSet();
const myStyleSet = {
  ...originalStyleSet,
  scrollBarHandler: css(originalStyleSet.scrollBarHandler, { backgroundColor: 'Red' })
};

export default props =>
  <BasicFilm styleSet={ myStyleSet }>
    <img alt="Cat 01" src="image/01.jpg" />
    <img alt="Cat 02" src="image/02.jpg" />
    <img alt="Cat 03" src="image/03.jpg" />
  </BasicFilm>
```

### Presets for style set

Sometimes, just increasing some paddings are more than enough for your styling need. When calling `createBasicStyleSet(options)`, you can specify the following options:

| Name              | Default   | Description                       |
|-------------------|-----------|-----------------------------------|
| `autoHide`        | `true`    | Auto-hide controls                |
| `cursor`          | `pointer` | Cursor style on dots and flippers |
| `dotBoxSize`      | `20`      | Hit box size of every dot         |
| `dotSize`         | `6`       | Visible dot size                  |
| `flipperBoxWidth` | `60`      | Hit box size of flippers          |
| `flipperSize`     | `40`      | Visible flipper size (circle)     |
| `scrollBarHeight` | `8`       | Scroll bar handler height         |
| `scrollBarMargin` | `4`       | Margin around scroll bar          |

# Deep-customization

Sometimes, CSS themeing is not enough for deep-customization. You may need to rebuild part of the carousel to achieve your customization goals.

Instead of forking our repository and building your carousel, you can rebuild `react-film` using composer/context pattern.

You can start from copying the following code, an absolute minimal without any non-essential styles. Our [`<BasicFilm>`](packages/component/src/BasicFilm.js) starts from here too.

```jsx
import React from 'react';
import { AutoCenter, Composer, Dots, FilmStrip, Flipper, ScrollBar } from 'react-film';

export default ({ children }) =>
  <Composer numItems={ React.Children.count(children) }>
    <div>
      <FilmStrip>
        { children }
      </FilmStrip>
      <ScrollBar />
      <Flipper mode="left">&lt;</Flipper>
      <Flipper mode="right">&gt;</Flipper>
    </div>
    <Dots>
      { () => '.' }
    </Dots>
    <AutoCenter />
  </Composer>
```

> You can also copy [`<BasicFilm>`](packages/component/src/BasicFilm.js) as your base template. There are no logic in it, so you can easily rebase latest changes from us without breaking your code.

## Creating a new control

You can copy [`Flipper.js`](packages/component/src/Flipper.js) to start creating your own control, or from the simpler version below:

```jsx
import React from 'react';
import { Context } from 'react-film';

export default ({ mode }) =>
  <Context.Consumer>
    { context =>
      <button onClick={ mode === 'left' ? context.scrollOneLeft : context.scrollOneRight }>
        { mode === 'left' ? '<' : '>' }
      </button>
    }
  </Context.Consumer>
```

## Migrating from 1.x

To reduce an extra render callback, we now require deep-customization users to pass in `numItems` prop to `<Composer>`.

## Context

Maybe you want to create a new flipper to control the carousel, the [context object](https://reactjs.org/docs/context.html) provides an API for interfacing with the carousel.

| Name                  | Type                                                         | Description                                                                                       |
|-----------------------|--------------------------------------------------------------|---------------------------------------------------------------------------------------------------|
| `index`               | `number`                                                     | Index of the current item                                                                         |
| `indexFraction`       | `number`                                                     | Index of the current item, in fraction (1.5 means 50% between 2nd and 3rd item)                   |
| `itemContainerRef`    | [React refs](https://reactjs.org/docs/refs-and-the-dom.html) | Ref of the immediate parent element containing all scrollable items                               |
| `numItems`            | `number`                                                     | Number of items in the carousel                                                                   |
| `scrollableRef`       | [React refs](https://reactjs.org/docs/refs-and-the-dom.html) | Ref of the scrollable element, use for artificial scrolling and tracking scroll position          |
| `scrollBarPercentage` | `string`                                                     | Percentage of the scroll bar position                                                             |
| `scrollBarWidth`      | `string`                                                     | Width (in percentage) of the scroll bar, respective to its total content                          |
| `scrolling`           | `boolean`                                                    | `true` if the user is scrolling (debounced 500ms after last `onScroll` event), otherwise, `false` |
| `scrollOneLeft`       | `() => {}`                                                   | Helper function to scroll one item to the left                                                    |
| `scrollOneRight`      | `() => {}`                                                   | Helper function to scroll one item to the right                                                   |
| `scrollTo`            | `(({ index: number, indexFraction: number }) => {}) => {}`   | Scroll to a specified index, see [sample below](#sample-scrollto-code)                            |

> If the context object lack of features you want to use, just [tell us your idea](https://github.com/spyip/react-film/issues).

### Sample `scrollTo` code

`scrollTo` is the core of the carousel. You call it to jump to specific items in the carousel. For example, to scroll one item to the left:

```jsx
context.scrollTo(({ indexFraction }) => {
  // indexFraction = 0 means it is on the first item
  // indexFraction = 0.5 means it is 50% between the first item and the second item

  return Math.ceil(indexFraction) - 1;
});
```

# Road map

* [x] Native horizontal scrolling
   * [x] Virtual scroll bar
   * [x] Show when hover
   * [x] Support touch scrolling
* [x] Bring your own flipper
   * [x] Show only when overflow
   * [x] Show when hover
* [x] Bring your own scrollbar
   * [x] Show only when overflow
   * [x] Show when hover
* [x] Bring your own dots
   * [x] Show only when overflow
* [x] Variable container width
   * Users can resize the container width any time they want
* [x] Variable item width:
   * Users can resize item width any time they want
   * Item may resize itself from time to time (consider when the image is not loaded)
* [x] Minimal styling as possible, let user customize it
* [x] Support keyboard left/right arrow (supported natively)
* [x] Using without React

## Features not planned to support

While you can dream about everything, engineering a piece of software that works great requires some opinions and it may not please everyone.

* Non-native scrolling
   * Physics model are different across browsers
   * Too many inputs need to be handled, difficult to build a good model
      * Mouse with physical wheel (some browsers support <kbd>SHIFT</kbd> + wheel to scroll horizontally)
      * Mouse with [capacitive touch wheel](https://www.microsoft.com/accessories/en-us/products/mice/microsoft-arc-mouse), or trackpoint devices
      * Precision Touchpad
      * Touchpad without precision scrolling
      * Pen input
      * Xbox controller
   * If items are focusable, it is difficult to scroll it into view because it is difficult to detect focus
* Infinite or "wrap-around" scrolling
   * Does not play nice with browser native scrolling

# Contributions

Like us? [Star](https://github.com/spyip/react-film/stargazers) us.

Want to make it better? [File](https://github.com/spyip/react-film/issues) us an issue.

Don't like something you see? [Submit](https://github.com/spyip/react-film/pulls) a pull request.
