import useViewContext from './internal/useViewContext';

export default function useIndexFraction() {
  const { indexFraction } = useViewContext();

  return [indexFraction];
}
