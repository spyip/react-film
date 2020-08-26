import useViewContext from './internal/useViewContext';

export default function useScrollBarPercentage() {
  const { scrollBarPercentage } = useViewContext();

  return [scrollBarPercentage];
}
