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
| `filmStrip` | `DOMElement` | Internal use: DOM element for the film strip |
| `numItems` | `number` | Number of items in the carousel |
| `scrollBarLeft` | `string` | Offset left (in percentage) of the scroll bar |
| `scrollBarWidth` | `string` | Width (in percentage) of the scroll bar, respective to its total content |
| `scrolling` | `boolean` | `true` if the user is scrolling (debounced from `onScroll` event), otherwise, `false` |
| `scrollLeft` | `number` | Internal use: offset left to scroll to |
| `scrollTo` | `(({ indexFraction: number }) => {}) => {}` | Scroll to a specified index, given the current index (in fraction) |
| `scrollToLeft` | `() => {}` | Scroll one element left |
| `scrollToRight` | `() => {}` | Scroll one element right |
| `setFilmStripRef` | `(DOMElement) => {}` | Internal use: set the DOM element for the film strip |
| `setNumItems` | `(number) => {}` | Internal use: set the number of items in the carousel |

# Contributions

Like us? [Star](https://github.com/spyip/react-film/stargazers) us.

Want to make it better? [File](https://github.com/spyip/react-film/issues) us an issue.

Don't like something you see? [Submit](https://github.com/spyip/react-film/pulls) a pull request.
