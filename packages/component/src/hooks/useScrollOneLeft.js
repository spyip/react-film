import useFunctionContext from './internal/useFunctionContext';

export default function useScrollOneLeft() {
  const { scrollOneLeft } = useFunctionContext();

  return scrollOneLeft;
}
