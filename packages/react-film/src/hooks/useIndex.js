import useViewContext from './internal/useViewContext.js';

export default function useIndex() {
  const { index } = useViewContext();

  return [index];
}
