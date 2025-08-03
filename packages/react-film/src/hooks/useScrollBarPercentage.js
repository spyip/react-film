import useViewContext from './internal/useViewContext.js';

export default function useScrollBarPercentage() {
  const { scrollBarPercentage } = useViewContext();

  return [scrollBarPercentage];
}
