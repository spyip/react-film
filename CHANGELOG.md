# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](http://semver.org/spec/v2.0.0.html).

## [Unreleased]
### Added
- Support specifying item elements and scrollable container element, by [@compulim](https://github.com/compulim) in PR [#21](https://github.com/spyip/react-film/pull/21).
- Fix [#22](https://github.com/spyip/react-film/issues/22). Added style options to hide "cursor: pointer" style, by [@compulim](https://github.com/compulim) in PR [#25](https://github.com/spyip/react-film/pull/25).

### Changed
- For performance reason, deep-customizing component will now need to pass `numItems` prop to `<Composer>`, by [@compulim](https://github.com/compulim) in PR [#21](https://github.com/spyip/react-film/pull/21).

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
