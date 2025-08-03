import useFunctionContext from './internal/useFunctionContext.js';

export default function useScrollTo() {
  const { scrollTo } = useFunctionContext();

  return scrollTo;
}
