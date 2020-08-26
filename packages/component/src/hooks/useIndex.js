import useViewContext from './internal/useViewContext';

export default function useIndex() {
  const { index } = useViewContext();

  return [index];
}
