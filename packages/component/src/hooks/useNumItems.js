import usePropsContext from './internal/usePropsContext';

export default function useNumItems() {
  const { numItems } = usePropsContext();

  return [numItems];
}
