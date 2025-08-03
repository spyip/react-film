import useViewContext from './internal/useViewContext.js';

export default function useScrollBarWidth() {
  const { scrollBarWidth } = useViewContext();

  return [scrollBarWidth];
}
