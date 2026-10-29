/** @type {() => void} */
let cleanup;
/** @type {<T, P>(render: (props: P) => T, options?: { initialProps: P }) => { rerender: (props: P) => void; result: { current: T } }} */
let renderHook;
/** @type {() => void} */
let unmount;

try {
  // eslint-disable-next-line import/no-unresolved
  ({ cleanup, renderHook, unmount } = require('@testing-library/react-hooks'));
} catch {
  ({ cleanup, renderHook, unmount } = require('@testing-library/react'));
}

module.exports = { cleanup, renderHook, unmount };
