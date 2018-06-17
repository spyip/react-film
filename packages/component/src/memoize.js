export default function memoize(fn) {
  let lastArgs = null;
  let lastResult = null;

  return function () {
    if (
      !lastArgs
      || lastArgs.length !== arguments.length
      || [].some.call(arguments, (arg, index) => arg !== lastArgs[index])
    ) {
      lastArgs = [].slice.call(arguments);
      lastResult = fn.apply(null, arguments);
    }

    return lastResult;
  };
}
