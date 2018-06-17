# react-film

[![npm version](https://badge.fury.io/js/react-film.svg)](https://badge.fury.io/js/react-film) [![Build Status](https://travis-ci.org/spyip/react-film.svg?branch=master)](https://travis-ci.org/spyip/react-film)

React component for showing carousel just like a film strip

# Sample code

You can play with our demo at https://spyip.github.io/react-film/.

```jsx
<BasicFilm height={ 316 }>
  <img alt="Cat 01" src="image/01.jpg" />
  <img alt="Cat 02" src="image/02.jpg" />
  <img alt="Cat 03" src="image/03.jpg" />
</BasicFilm>
```

> Note: we need to set a `height` here to hide scroll bar in Firefox.

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

# Contributions

Like us? [Star](https://github.com/spyip/react-film/stargazers) us.

Want to make it better? [File](https://github.com/spyip/react-film/issues) us an issue.

Don't like something you see? [Submit](https://github.com/spyip/react-film/pulls) a pull request.
