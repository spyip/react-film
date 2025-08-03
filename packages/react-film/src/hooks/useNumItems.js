import usePropsContext from './internal/usePropsContext.js';

export default function useNumItems() {
  const { numItems } = usePropsContext();

  return [numItems];
}
