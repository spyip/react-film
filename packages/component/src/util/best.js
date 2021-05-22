export default function best(array, scorer) {
  return array.reduce(
    (best, item, index) => {
      const score = scorer.call(array, item, index);

      if (score > best.score) {
        return { index, score };
      }

      return best;
    },
    { index: -1, score: -Infinity }
  ).index;
}
