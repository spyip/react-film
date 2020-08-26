import useFunctionContext from './internal/useFunctionContext';

export default function useScrollOneRight() {
  const { scrollOneRight } = useFunctionContext();

  return scrollOneRight;
}
