function later(fn, interval) {
  if (interval > 0) {
    return setTimeout(fn, interval);
  }

  fn();
}

export default function (fn, interval) {
  let last = 0;
  let timeout;

  return function (...args) {
    timeout ||
      (timeout = later(() => {
        timeout = null;
        last = Date.now();
        fn(...args);
      }, interval + last - Date.now()));
  };
}
