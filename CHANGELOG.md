# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](http://semver.org/spec/v2.0.0.html).

## [Unreleased]

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
