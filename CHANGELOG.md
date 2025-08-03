# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](http://semver.org/spec/v2.0.0.html).

## [4.0.0] - 2025-08-03

### Added

- Added `leftFlipperAriaLabel` and `rightFlipperAriaLabel` for customizing the `aria-label` attribute for flipper buttons, by [@compulim](https://github.com/compulim), in PR [#98](https://github.com/spyip/react-film/pull/98)
- Added `stylesRoot` property which allows to specify a container node component styles will be placed into, by [@OEvgeny](https://github.com/OEvgeny) in PR [#102](https://github.com/spyip/react-film/pull/102)

### Changed

- Avoided global pollution via `@babel/runtime-corejs3`, by [@compulim](https://github.com/compulim), in PR [#99](https://github.com/spyip/react-film/pull/99)
- Bundle is now built using Webpack for compatibility with IE Mode, by [@compulim](https://github.com/compulim), in PR [#99](https://github.com/spyip/react-film/pull/99)
- Bump dependencies, by [@compulim](https://github.com/compulim), in PR [#99](https://github.com/spyip/react-film/pull/99), and PR [#103](https://github.com/spyip/react-film/pull/103)
  - Added `bump` scripts
  - Bumped scaffold
  - Production dependencies
    - [`@emotion/css@11.13.5`](https://npmjs.com/package/@emotion/css/v/11.13.5)
    - [`classnames@2.5.1`](https://npmjs.com/package/classnames/v/2.5.1)
    - [`html-react-parser@5.2.6`](https://npmjs.com/package/html-react-parser/v/5.2.6)
  - Development dependencies
    - [`@babel/preset-env@7.28.0`](https://npmjs.com/package/@babel/preset-env/v/7.28.0)
    - [`@babel/preset-react@7.27.1`](https://npmjs.com/package/@babel/preset-react/v/7.27.1)
    - [`@babel/preset-typescript@7.27.1`](https://npmjs.com/package/@babel/preset-typescript/v/7.27.1)
    - [`@emotion/css@11.13.5`](https://npmjs.com/package/@emotion/css/v/11.13.5)
    - [`@testing-library/dom@10.4.1`](https://npmjs.com/package/@testing-library/dom/v/10.4.1)
    - [`@testing-library/react@16.3.0`](https://npmjs.com/package/@testing-library/react/v/16.3.0)
    - [`classnames@2.5.1`](https://npmjs.com/package/classnames/v/2.5.1)
    - [`esbuild@0.25.8`](https://npmjs.com/package/esbuild/v/0.25.8)
    - [`eslint-import-resolver-node@0.3.9`](https://npmjs.com/package/eslint-import-resolver-node/v/0.3.9)
    - [`eslint-import-resolver-typescript@4.4.4`](https://npmjs.com/package/eslint-import-resolver-typescript/v/4.4.4)
    - [`eslint-plugin-import@2.32.0`](https://npmjs.com/package/eslint-plugin-import/v/2.32.0)
    - [`eslint-plugin-prettier@5.5.3`](https://npmjs.com/package/eslint-plugin-prettier/v/5.5.3)
    - [`eslint-plugin-react@7.37.5`](https://npmjs.com/package/eslint-plugin-react/v/7.37.5)
    - [`eslint@9.32.0`](https://npmjs.com/package/eslint/v/9.32.0)
    - [`jest@30.0.5`](https://npmjs.com/package/jest/v/30.0.5)
    - [`prettier@3.6.2`](https://npmjs.com/package/prettier/v/3.6.2)
    - [`publint@0.3.12`](https://npmjs.com/package/publint/v/0.3.12)
    - [`react-dom@18.3.1`](https://npmjs.com/package/react-dom/v/18.3.1)
    - [`react-test-renderer@18.3.1`](https://npmjs.com/package/react-test-renderer/v/18.3.1)
    - [`react@18.3.1`](https://npmjs.com/package/react/v/18.3.1)
- 💥 Default has been renamed to `ReactFilm`, by [@compulim](https://github.com/compulim), in PR [#103](https://github.com/spyip/react-film/pull/103)
- `retrofit()` is now available in CJS, ESM and UMD, by [@compulim](https://github.com/compulim), in PR [#103](https://github.com/spyip/react-film/pull/103)

## [3.1.0] - 2021-10-14

### Changed

- Added support of GitHub Codespaces, by [@compulim](https://github.com/compulim), in PR [#89](https://github.com/spyip/react-film/pull/89)
- Changed peer dependencies requirement to `react >= 16.8.6`, by [@compulim](https://github.com/compulim), in PR [#89](https://github.com/spyip/react-film/pull/89)
- Bump dependencies, by [@compulim](https://github.com/compulim), in PR [#89](https://github.com/spyip/react-film/pull/89)
  - Development dependencies
    - [`@babel/cli@7.15.7`](https://npmjs.com/package/@babel/cli)
    - [`@babel/core@7.15.8`](https://npmjs.com/package/@babel/core)
    - [`@babel/plugin-transform-runtime@7.15.8`](https://npmjs.com/package/@babel/plugin-transform-runtime)
    - [`@babel/preset-env@7.15.8`](https://npmjs.com/package/@babel/preset-env)
    - [`@babel/preset-react@7.14.5`](https://npmjs.com/package/@babel/preset-react)
    - [`@testing-library/jest-dom@5.14.1`](https://npmjs.com/package/@testing-library/jest-dom)
    - [`@testing-library/react@12.1.2`](https://npmjs.com/package/@testing-library/react)
    - [`@testing-library/user-event@13.3.0`](https://npmjs.com/package/@testing-library/user-event)
    - [`concurrently@6.3.0`](https://npmjs.com/package/concurrently)
    - [`core-js@3.18.3`](https://npmjs.com/package/core-js)
    - [`esbuild@0.13.6`](https://npmjs.com/package/esbuild)
    - [`eslint-plugin-prettier@4.0.0`](https://npmjs.com/package/eslint-plugin-prettier)
    - [`eslint-plugin-react@7.26.1`](https://npmjs.com/package/eslint-plugin-react)
    - [`eslint@7.32.0`](https://npmjs.com/package/eslint)
    - [`husky@7.0.2`](https://npmjs.com/package/husky)
    - [`jest@27.2.5`](https://npmjs.com/package/jest)
    - [`prettier@2.4.1`](https://npmjs.com/package/prettier)
    - [`react-scripts@4.0.3`](https://npmjs.com/package/react-scripts)
    - [`serve@12.0.1`](https://npmjs.com/package/serve)
    - [`web-vitals@2.1.2`](https://npmjs.com/package/web-vitals)

## [3.0.1] - 2021-06-29

### Changed

- Moved from [`webpack`](https://webpack.js.org/) to [`esbuild@0.12.1`](https://esbuild.github.io/), by [@compulim](https://github.com/compulim), in PR [#85](https://github.com/spyip/react-film/pull/85)
- Bump dependencies, by [@compulim](https://github.com/compulim), in PR [#85](https://github.com/spyip/react-film/pull/85)
  - Production dependencies
    - [`@babel/runtime-corejs3@7.14.0`](https://npmjs.com/package/@babel/runtime-corejs3) from [`@babel/runtime`](https://npmjs.com/package/@babel/runtime)
    - [`@emotion/css@11.1.3`](https://npmjs.com/package/@emotion/css) from [`create-emotion`](https://npmjs.com/package/create-emotion)
    - [`classnames@2.3.1`](https://npmjs.com/package/classnames)
    - [`core-js@3.12.1`](https://npmjs.com/package/core-js)
    - [`html-react-parser@1.2.6`](https://npmjs.com/package/html-react-parser)
    - [`memoize-one@5.2.1`](https://npmjs.com/package/memoize-one)
  - Development dependencies
    - [`@babel/cli@7.14.3`](https://npmjs.com/package/@babel/cli)
    - [`@babel/core@7.14.3`](https://npmjs.com/package/@babel/core)
    - [`@babel/plugin-transform-runtime@7.14.3`](https://npmjs.com/package/@babel/plugin-transform-runtime)
    - [`@babel/preset-env@7.14.2`](https://npmjs.com/package/@babel/preset-env)
    - [`@babel/preset-react@7.13.13`](https://npmjs.com/package/@babel/preset-react)
    - [`concurrently@6.1.0`](https://npmjs.com/package/concurrently)
    - [`eslint-plugin-prettier@3.4.0`](https://npmjs.com/package/eslint-plugin-prettier)
    - [`eslint-plugin-react-hooks@4.2.0`](https://npmjs.com/package/eslint-plugin-react-hooks)
    - [`eslint-plugin-react@7.23.2`](https://npmjs.com/package/eslint-plugin-react)
    - [`eslint@7.26.0`](https://npmjs.com/package/eslint)
    - [`jest@26.6.3`](https://npmjs.com/package/jest)
    - [`lerna@4.0.0`](https://npmjs.com/package/lerna)
    - [`prettier@2.3.0`](https://npmjs.com/package/prettier)

### Fixed

- Fixed [#75](https://github.com/spyip/react-film/issues/75). Flippers, dots, and scroll bar should work in right-to-left (RTL) correctly in Chrome 85 and beyond, by [@compulim](https://github.com/compulim), in PR [#86](https://github.com/spyip/react-film/pull/86)

## [3.0.0] - 2020-09-01

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

### Changed

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
- 💥 CSS has been revamped by introducing support of customization through CSS BEM
  - `className` props are removed from sub-components
  - `createBasicStyleSet()` will only return a single complete style set, namely `root`. The style set will be a React CSS object, instead of a class name
  - `styleSet` prop will accept a map of React CSS object, instead of class names

### Removed

- 💥 API through React Context is being deprecated in favor of React Hooks

## [2.1.0] - 2020-05-11

### Changed

- 💥 `z-index` added to flipper and filmstrip
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

### Added

- Support right-to-left, by [@spyip](https://github.com/spyip) in PR [#32](https://github.com/spyip/react-film/pull/32).
- Added `flipperBlurFocusOnClick` prop to `BasicFilm` and `blurFocusOnClick` prop to `Flipper` components, by [@tdurnford](https://github.com/tdurnford) in PR [#33](https://github.com/spyip/react-film/pull/33).
- Support right-to-left on IE11, by [@spyip](https://github.com/spyip) in PR [#34](https://github.com/spyip/react-film/pull/34).
- Hide flipper on edge items and added `autoHideFlipperOnEdge` option, by [@spyip](https://github.com/spyip) in PR [#34](https://github.com/spyip/react-film/pull/34).

### Changed

- Bump peer dependency, in PR [#33](https://github.com/spyip/react-film/pull/33)
  - [react@^16.8.6](https://www.npmjs.com/package/react)

### Removed

- We will no longer include `react` and `react-dom` in our NPM package, instead, we will requires peer dependencies of `react@^16.8.6` and `react-dom@^16.8.6`

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

### Changed

- Fix [#12](https://github.com/spyip/react-film/issues/12). Split `Context` into public and internal, by [@compulim](https://github.com/compulim) in PR [#16](https://github.com/spyip/react-film/pull/16).

### Fixed

- Fix [#13](https://github.com/spyip/react-film/issues/13). Fix flipper not working on content with `<ul>`, by [@compulim](https://github.com/compulim) in PR [#15](https://github.com/spyip/react-film/pull/15).
- Fix [#18](https://github.com/spyip/react-film/issues/18). Fix flipper should not submit if carousel is a descendant of `<form>`, by [@compulim](https://github.com/compulim) in PR [#19](https://github.com/spyip/react-film/pull/19).

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

[4.0.0]: https://github.com/spyip/react-film/compare/v3.1.0...v4.0.0
[3.1.0]: https://github.com/spyip/react-film/compare/v3.0.1...v3.1.0
[3.0.1]: https://github.com/spyip/react-film/compare/v3.0.0...v3.0.1
[3.0.0]: https://github.com/spyip/react-film/compare/v2.1.0...v3.0.0
[2.1.0]: https://github.com/spyip/react-film/compare/v2.0.2...v2.1.0
[2.0.2]: https://github.com/spyip/react-film/compare/v2.0.1...v2.0.2
[2.0.1]: https://github.com/spyip/react-film/compare/v2.0.0...v2.0.1
[2.0.0]: https://github.com/spyip/react-film/compare/v1.3.0...v2.0.0
[1.3.0]: https://github.com/spyip/react-film/compare/v1.2.0...v1.3.0
[1.2.0]: https://github.com/spyip/react-film/compare/v1.1.2...v1.2.0
[1.1.2]: https://github.com/spyip/react-film/compare/v1.1.1...v1.1.2
[1.1.1]: https://github.com/spyip/react-film/compare/v1.1.0...v1.1.1
[1.1.0]: https://github.com/spyip/react-film/compare/v1.0.0...v1.1.0
[1.0.0]: https://github.com/spyip/react-film/releases/tag/v1.0.0
