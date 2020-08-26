import useViewContext from './internal/useViewContext';

export default function useScrolling() {
  const { scrolling } = useViewContext();

  return [scrolling];
}
