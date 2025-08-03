import useFunctionContext from './internal/useFunctionContext.js';

export default function useScrollOneRight() {
  const { scrollOneRight } = useFunctionContext();

  return scrollOneRight;
}
