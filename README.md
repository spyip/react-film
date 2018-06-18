# react-film

[![npm version](https://badge.fury.io/js/react-film.svg)](https://badge.fury.io/js/react-film) [![Build Status](https://travis-ci.org/spyip/react-film.svg?branch=master)](https://travis-ci.org/spyip/react-film)

React component for showing carousel just like a film strip. It is lightweight and focus on performance.

This project scaffolding is from [react-component-template](https://github.com/compulim/react-component-template).

# Demo

Try out our demo at https://spyip.github.io/react-film/.

# Sample code

```jsx
<BasicFilm height={ 316 }>
  <img alt="Cat 01" src="image/01.jpg" />
  <img alt="Cat 02" src="image/02.jpg" />
  <img alt="Cat 03" src="image/03.jpg" />
</BasicFilm>
```

> Note: we need to specify `height` here because there are no CSS rule one can use to [hide scroll bars in Firefox](https://stackoverflow.com/questions/19580366/hide-scrollbar-in-firefox).

# Props

You can control `<BasicFilm>` using props listed below.

| Name | Default | Description |
| - | - | - |
| `autoCenter` | `true` | `true` will enable auto-center after scroll stopped for a second, otherwise, `false` |
| `autoHide` | `true` | `true` to auto hide controls after pointer leave or scroll stopped, otherwise, `false` |
| `height` | | Height of the carousel, in `number` (required for Firefox) |
| `showDots` | `true` | `true` to show dots below the carousel, otherwise, `false` |
| `showFlipper` | `true` | `true` to show flippers (side buttons), otherwise, `false` |
| `showScrollBar` | `true` | `true` to show scroll bar, otherwise, `false` |
| `carouselClassName` | | Class name for carousel component |
| `dotsBoxClassName` | | Class name for dots container |
| `dotsItemClassName` | | Class name for individual dot |
| `leftFlipperClassName` | | Class name for left flipper |
| `rightFlipperClassName` | | Class name for right flipper |
| `scrollBarBoxClassName` | | Class name for scroll bar container |
| `scrollBarHandlerClassName` | | Class name for scroll bar handler |

## Basic styles

To better assist designer to style the component, when a class name is passed, the default styles are replaced. This is by design and help designers to create their unique styles without the need to overcome the effect of existing styles.

To append to the default styles, copy the following code.

```js
import { css } from 'glamor';
import BasicFilm, { createBasicStyles } from 'react-film';

const originalStyles = createBasicStyles();
const customScrollBarHandler = css(originalStyles.scrollBarHandler, {
  backgroundColor: 'Red'
});

render() {
  return (
    <BasicFilm scrollBarHandlerClassName={ customScrollBarHandler + '' }>
      <img alt="Cat 01" src="image/01.jpg" />
      <img alt="Cat 02" src="image/02.jpg" />
      <img alt="Cat 03" src="image/03.jpg" />
    </BasicFilm>
  );
}
```

### Options for basic styles

You can specify options when creating a style set thru `createBasicStyles(options)`.

| Name | Default | Description |
| - | - | - |
| `autoHide` | `true` | Auto-hide controls |
| `dotBoxSize` | `20` | Hit box size of every dot |
| `dotSize` | `6` | Actual dot size (circle) |
| `flipperBoxWidth` | `60` | Hit box size of flippers |
| `flipperSize` | `40` | Actual flipper size (circle) |
| `scrollBarHeight` | `8` | Scroll bar handler height |
| `scrollBarMargin` | `4` | Margin around scroll bar |

# Features

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

# Advanced customization

Sometimes, CSS themeing is not enough for deep-customization. You might need to rebuild part of the carousel to achieve your customization goals.

Instead of building your carousel, you can rebuild `react-film` using composer/context pattern.

You can start from copying the following code.

```jsx
import React from 'react';
import { AutoCenter, Dots, FilmComposer, FilmStrip, Flipper, ScrollBar } from 'react-film';

export default ({ children, height }) =>
  <FilmComposer>
    <div style={{ height }}>
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
  </FilmComposer>
```

## Context

The context object provides API for interfacing the carousel.

| Name | Type | Description |
| - | - | - |
| `numItems` | `number` | Number of items in the carousel |
| `scrollBarFraction` | `string` | Percentage of the scroll bar, from `0%` to `100%` |
| `scrollBarWidth` | `string` | Width (in percentage) of the scroll bar, respective to its total content |
| `scrolling` | `boolean` | `true` if the user is scrolling (debounced 500ms after last `onScroll` event), otherwise, `false` |
| `scrollOneLeft` | `() => {}` | Scroll one item to the left |
| `scrollOneRight` | `() => {}` | Scroll one item to the right |
| `scrollTo` | `(({ index: number, indexFraction: number }) => {}) => {}` | Scroll to a specified index, see [sample below](#sample-scrollto-code) |

### Sample `scrollTo` code

`scrollTo` is a generic function that you can use to jump to specific items in the carousel. To scroll one item to the left:

```jsx
context.scrollTo(({ indexFraction }) => {
  // indexFraction = 0 means it is on the first item
  // indexFraction = 0.5 means it is 50% between the first item and the second item

  return Math.ceil(indexFraction) - 1;
});
```

# Road map

* Style set, instead of providing each class name

## Features not planned to support

* Non-native scrolling
   * Physics model are different across browsers
   * Too many inputs need to be handled, difficult to build a good model
      * Mouse with physical wheel (<kbd>SHIFT</kbd> + wheel to scroll horizontally)
      * Mouse without capacitive wheel, or trackpoint devices
      * Touchpad with precision scrolling
      * Touchpad without precision scrolling
      * Surface Pen
      * Xbox controller
* Infinite or "wrap-around" scrolling
   * Does not play nice with browser native scrolling

# Contributions

Like us? [Star](https://github.com/spyip/react-film/stargazers) us.

Want to make it better? [File](https://github.com/spyip/react-film/issues) us an issue.

Don't like something you see? [Submit](https://github.com/spyip/react-film/pulls) a pull request.
