import useInternalContext from './internal/useInternalContext';

export default function useItemContainerRef() {
  const { itemContainerRef } = useInternalContext();

  return itemContainerRef;
}
