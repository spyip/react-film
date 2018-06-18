# react-film

[![npm version](https://badge.fury.io/js/react-film.svg)](https://badge.fury.io/js/react-film) [![Build Status](https://travis-ci.org/spyip/react-film.svg?branch=master)](https://travis-ci.org/spyip/react-film)

React component for showing carousel just like a film strip.

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

# Features

* [x] Native horizontal scrolling
   * [x] Virtual scroll bar
   * [x] Optionally, show when hover
   * [x] Support touch scrolling
* [x] Bring your own flipper
   * [x] Sample: show only when overflow
   * [x] Sample: show when hover
* [x] Bring your own scrollbar
   * [x] Sample: show only when overflow
   * [x] Sample: show when hover
* [x] Bring your own dots
   * [x] Sample: show only when overflow
* [x] Variable container width
   * Users can resize the container width any time they want
* [x] Variable item width:
   * Users can resize item width any time they want
   * Item may resize itself from time to time (consider when the image is not loaded)
* [x] Minimal styling as possible, let user customize it
* [x] Support keyboard left/right arrow (supported natively)

# Props

| Name | Default | Description |
| - | - | - |
| `height` | `number` | Height of the carousel |

# Context

| Name | Type | Description |
| - | - | - |
| `numItems` | `number` | Number of items in the carousel |
| `scrollBarLeft` | `string` | Offset left (in percentage) of the scroll bar |
| `scrollBarWidth` | `string` | Width (in percentage) of the scroll bar, respective to its total content |
| `scrolling` | `boolean` | `true` if the user is scrolling (debounced 500ms after last `onScroll` event), otherwise, `false` |
| `scrollOneLeft` | `() => {}` | Scroll one item to the left |
| `scrollOneRight` | `() => {}` | Scroll one item to the right |
| `scrollTo` | `(({ indexFraction: number }) => {}) => {}` | Scroll to a specified index, see [sample below](#sample-scrollto-code) |

## Sample `scrollTo` code

To scroll one item to the left, we call `scrollTo` like this:

```js
context.scrollTo(({ indexFraction }) => {
  // indexFraction = 0 means it is on the first item
  // indexFraction = 0.5 means it is 50% between the first item and the second item

  return Math.ceil(indexFraction) - 1;
});
```

> The code is for elaboration only, `context` is usually called within JSX

# Road map

* Move styles out of primitive components (`Dots`, `FilmStrip`, `Flipper`, `ScrollBar`) into `BasicFilm`
* Add feature switches to `BasicFilm`
   * Show/hide dots
   * Show/hide flipper
   * Show/hide scroll bar

## Features not planned to support

* Non-native scrolling
   * Physics model are different across browsers
   * Too many inputs need to be handled, difficult to build a good model
      * Mouse with physical wheel
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
