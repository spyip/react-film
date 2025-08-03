import useViewContext from './internal/useViewContext.js';

export default function useScrolling() {
  const { scrolling } = useViewContext();

  return [scrolling];
}
