import useViewContext from './internal/useViewContext';

export default function useScrollBarWidth() {
  const { scrollBarWidth } = useViewContext();

  return [scrollBarWidth];
}
