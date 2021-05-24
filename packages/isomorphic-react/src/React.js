/* global module */

import React from 'react';

module.exports = typeof window.React === 'undefined' ? React : window.React;
