# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](http://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [3.0.0] - 2020-09-01

### Breaking changes

- API through React Context is being deprecated in favor of React Hooks
- CSS has been revamped by introducing support of customization through CSS BEM
   - `className` props are removed from sub-components
   - `createBasicStyleSet()` will only return a single complete style set, namely `root`. The style set will be a React CSS object, instead of a class name
   - `styleSet` prop will accept a map of React CSS object, instead of class names

### Added

- Revamped in PR [#57](https://github.com/spyip/react-film/pull/57), [#58](https://github.com/spyip/react-film/pull/58), [#59](https://github.com/spyip/react-film/pull/59), [#60](https://github.com/spyip/react-film/pull/60), [#61](https://github.com/spyip/react-film/pull/61) and [#62](https://github.com/spyip/react-film/pull/62)
   - [Single set of CSS BEM style](https://github.com/spyip/react-film/search?q=createStyleSheet.js&unscoped_q=createStyleSheet.js)
   - Added `nonce` prop for Content Security Policy support
   - Added React Hooks API
   - Added RTL support on Chromium Edge
   - Added `overscroll-behavior-x: contain` to prevent scroll-chaining
   - Added `eslint` and `prettier`
   - Sub-component `FilmStrip` is renamed to `Filmstrip`
   - Moved from class components to functional components

### Changes

- Moved from [`glamor`](https://npmjs.com/package/glamor) to [`create-emotion`](https://npmjs.com/package/create-emotion), in PR [#57](https://github.com/spyip/react-film/pull/57)
- Replaced [`babel-plugin-version-transform`](https://npmjs.com/package/babel-plugin-version-transform) with [`babel-plugin-transform-inline-environment-variables`](https://npmjs.com/package/babel-plugin-transform-inline-environment-variables), in PR [#56](https://github.com/spyip/react-film/pull/56)
- Bump dependencies, in PR [#56](https://github.com/spyip/react-film/pull/56)
   - Production dependencies
      - [`@babel/runtime@7.11.2`](https://npmjs.com/package/@babel/runtime)
      - [`classnames@2.2.6`](https://npmjs.com/package/classnames)
      - [`create-emotion@10.0.27`](https://npmjs.com/package/create-emotion)
      - [`html-react-parser@0.13.0`](https://npmjs.com/package/html-react-parser)
      - [`memoize-one@5.1.1`](https://npmjs.com/package/memoize-one)
   - Development dependencies
      - [`@babel/cli@7.10.5`](https://npmjs.com/package/@babel/cli)
      - [`@babel/core@7.11.4`](https://npmjs.com/package/@babel/core)
      - [`@babel/plugin-proposal-object-rest-spread@7.11.0`](https://npmjs.com/package/@babel/plugin-proposal-object-rest-spread)
      - [`@babel/plugin-transform-runtime@7.11.0`](https://npmjs.com/package/@babel/plugin-transform-runtime)
      - [`@babel/preset-env@7.11.0`](https://npmjs.com/package/@babel/preset-env)
      - [`@babel/preset-react@7.10.4`](https://npmjs.com/package/@babel/preset-react)
      - [`babel-jest@26.3.0`](https://npmjs.com/package/babel-jest)
      - [`concurrently@5.3.0`](https://npmjs.com/package/concurrently)
      - [`core-js@3.6.5`](https://npmjs.com/package/core-js)
      - [`create-emotion@10.0.27`](https://npmjs.com/package/create-emotion)
      - [`eslint-plugin-prettier@3.1.4`](https://npmjs.com/package/eslint-plugin-prettier)
      - [`eslint@7.7.0`](https://npmjs.com/package/eslint)
      - [`jest@26.4.2`](https://npmjs.com/package/jest)
      - [`lerna@3.22.1`](https://npmjs.com/package/lerna)
      - [`prettier@2.0.5`](https://npmjs.com/package/prettier)
      - [`react-app-polyfill@1.0.6`](https://npmjs.com/package/react-app-polyfill)
      - [`react-film@0.0.0-0`](https://npmjs.com/package/react-film)
      - [`react-scripts@3.4.3`](https://npmjs.com/package/react-scripts)
      - [`rimraf@3.0.2`](https://npmjs.com/package/rimraf)
      - [`serve@11.3.2`](https://npmjs.com/package/serve)
      - [`webpack-cli@3.3.12`](https://npmjs.com/package/webpack-cli)
      - [`webpack@4.44.1`](https://npmjs.com/package/webpack)

## [2.1.0] - 2020-05-11

### Breaking changes

- `z-index` added to flipper and filmstrip
   - List item with `position: relative` will no longer obstructing the left flipper, we are adding `z-index: 1` to both flippers, and `z-index: 0` to filmstrip to form a new [stacking context](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Positioning/Understanding_z_index/The_stacking_context).

### Fixed

- Fixed list item with `position: relative` will no longer obstructing the left flipper, in PR [#XX](https://github.com/spyip/react-film/pull/XX).
- Fixed unhandled exception for `offsetWidth of undefined` exception, in PR [#XX](https://github.com/spyip/react-film/pull/XX).

## [2.0.2] - 2020-01-15

### Fixed

- Fixed [#37](https://github.com/spyip/react-film/pull/37), hiding overflowing button when at edge, by [@compulim](https://github.com/compulim) in PR [#39](https://github.com/spyip/react-film/pull/39).

## [2.0.1] - 2020-01-15

### Fixed

- Fixed [#37](https://github.com/spyip/react-film/pull/37), hiding overflowing button when at edge, by [@compulim](https://github.com/compulim) in PR [#38](https://github.com/spyip/react-film/pull/38).

## [2.0.0] - 2019-12-03

### Breaking changes

- We will no longer include `react` and `react-dom` in our NPM package, instead, we will requires peer dependencies of `react@^16.8.6` and `react-dom@^16.8.6`

### Added

- Support right-to-left, by [@spyip](https://github.com/spyip) in PR [#32](https://github.com/spyip/react-film/pull/32).
- Added `flipperBlurFocusOnClick` prop to `BasicFilm` and `blurFocusOnClick` prop to `Flipper` components, by [@tdurnford](https://github.com/tdurnford) in PR [#33](https://github.com/spyip/react-film/pull/33).
- Support right-to-left on IE11, by [@spyip](https://github.com/spyip) in PR [#34](https://github.com/spyip/react-film/pull/34).
- Hide flipper on edge items and added `autoHideFlipperOnEdge` option, by [@spyip](https://github.com/spyip) in PR [#34](https://github.com/spyip/react-film/pull/34).

### Changed

- Bump peer dependency, in PR [#33](https://github.com/spyip/react-film/pull/33)
  - [react@^16.8.6](https://www.npmjs.com/package/react)

### Fixed

- Fix server-side rendering, by [@giulianok](https://github.com/giulianok) in PR [#29](https://github.com/spyip/react-film/pull/29).

## [1.3.0] - 2019-10-24

### Added
- Support specifying item elements and scrollable container element, by [@compulim](https://github.com/compulim) in PR [#21](https://github.com/spyip/react-film/pull/21).
- Fix [#22](https://github.com/spyip/react-film/issues/22). Added style options to hide "cursor: pointer" style, by [@compulim](https://github.com/compulim) in PR [#25](https://github.com/spyip/react-film/pull/25).

### Changed
- For performance reason, deep-customizing component will now need to pass `numItems` prop to `<Composer>`, by [@compulim](https://github.com/compulim) in PR [#21](https://github.com/spyip/react-film/pull/21).
- Bump dependencies, in PR [#27](https://github.com/spyip/react-film/pull/27)
   - [@babel/cli@^7.5.5](https://www.npmjs.com/package/@babel/cli)
   - [@babel/core@^7.5.5](https://www.npmjs.com/package/@babel/core)
   - [@babel/plugin-proposal-object-rest-spread@^7.5.5](https://www.npmjs.com/package/@babel/plugin-proposal-object-rest-spread)
   - [@babel/plugin-transform-runtime@^7.5.5](https://www.npmjs.com/package/@babel/plugin-transform-runtime)
   - [@babel/preset-env@^7.5.5](https://www.npmjs.com/package/@babel/preset-env)
   - [@babel/runtime@^7.5.5](https://www.npmjs.com/package/@babel/runtime)
   - [babel-core@^6.26.3](https://www.npmjs.com/package/babel-core)
   - [babel-jest@^24.8.0](https://www.npmjs.com/package/babel-jest)
   - [concurrently@^4.1.1](https://www.npmjs.com/package/concurrently)
   - [jest@^24.8.0](https://www.npmjs.com/package/jest)
   - [react-scripts@^3.0.1](https://www.npmjs.com/package/react-scripts)
   - [rimraf@^2.6.3](https://www.npmjs.com/package/rimraf)
   - [serve@^11.1.0](https://www.npmjs.com/package/serve)
   - [webpack-cli@^3.3.6](https://www.npmjs.com/package/webpack-cli)
   - [webpack@^4.36.1](https://www.npmjs.com/package/webpack)

### Fixed
- Fix [#23](https://github.com/spyip/react-film/issues/23). Fix IE11 not working with CoreJS-polyfilled `[...document.children]`, by [@compulim](https://github.com/compulim) in PR [#24](https://github.com/spyip/react-film/pull/24).

## [1.2.0] - 2019-03-20
### Added
- Support existing web site without React loaded.
   - Load bundle from [unpkg.com](https://unpkg.com/react-film/umd/), then call `window.ReactFilm.retrofit(element, props)`.
   - Retrofit existing DOM tree with a new DOM tree backed by React/ReactDOM in the bundle.

### Fixed
- Fix [#13](https://github.com/spyip/react-film/issues/13). Fix flipper not working on content with `<ul>`, by [@compulim](https://github.com/compulim) in PR [#15](https://github.com/spyip/react-film/pull/15).
- Fix [#18](https://github.com/spyip/react-film/issues/18). Fix flipper should not submit if carousel is a descendant of `<form>`, by [@compulim](https://github.com/compulim) in PR [#19](https://github.com/spyip/react-film/pull/19).

### Changed
- Fix [#12](https://github.com/spyip/react-film/issues/12). Split `Context` into public and internal, by [@compulim](https://github.com/compulim) in PR [#16](https://github.com/spyip/react-film/pull/16).

## [1.1.2] - 2019-01-20
### Fixed
- Composer: fix React warning, should `clearTimeout` on unmount
- Composer: fix error on zero elements

## [1.1.1] - 2018-10-28
### Changed
- Dot: add customizable `aria-label`
- Flipper: add customizable `aria-label`
- Flipper: follow [toggle button accessibility practice](https://www.w3.org/TR/2016/WD-wai-aria-practices-1.1-20160317/examples/button/button.html)
- Playground: bump to `react@16.6.0`, `react-dom@16.6.0`, and `react-scripts@2.0.5`

## [1.1.0] - 2018-10-28
### Changed
- Accessibility fixes
   - Dot: add focus indicator to dots
   - Dot: now behave like a button on keyboard navigation
   - Flipper: contrast ratio
   - Flipper: reorder DOM for keyboard navigation
   - Flipper: when auto-hide is enabled, focus on flipper will pull it out

## [1.0.0] - 2018-06-18
### Added
- Initial release
