import React, { StrictMode } from 'react';
// eslint-disable-next-line react/no-deprecated
import { render } from 'react-dom';
import App from './App.tsx';
import './index.css';

render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementsByTagName('main')[0]
);

declare const IS_DEVELOPMENT: boolean;

if (typeof IS_DEVELOPMENT !== 'undefined' && IS_DEVELOPMENT) {
  new EventSource('/esbuild').addEventListener('change', () => location.reload());
}
