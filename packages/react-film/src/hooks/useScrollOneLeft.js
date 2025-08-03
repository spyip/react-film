import useFunctionContext from './internal/useFunctionContext.js';

export default function useScrollOneLeft() {
  const { scrollOneLeft } = useFunctionContext();

  return scrollOneLeft;
}
