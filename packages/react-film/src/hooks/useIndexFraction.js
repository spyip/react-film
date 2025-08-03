import useViewContext from './internal/useViewContext.js';

export default function useIndexFraction() {
  const { indexFraction } = useViewContext();

  return [indexFraction];
}
