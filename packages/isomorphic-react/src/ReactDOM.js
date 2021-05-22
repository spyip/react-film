/* global module */

import ReactDOM from 'react-dom';

module.exports = typeof window.ReactDOM === 'undefined' ? ReactDOM : window.ReactDOM;
