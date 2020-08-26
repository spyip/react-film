function later(fn, interval) {
  if (interval > 0) {
    return setTimeout(fn, interval);
  } else {
    fn();
  }
}

export default function (fn, interval) {
  let last = 0;
  let timeout;

  return function () {
    timeout ||
      (timeout = later(() => {
        timeout = null;
        last = Date.now();
        fn.apply(null, arguments);
      }, interval + last - Date.now()));
  };
}
