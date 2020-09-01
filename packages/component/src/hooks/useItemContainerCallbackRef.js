import { useCallback } from 'react';

import useInternalContext from './internal/useInternalContext';

export default function useItemContainerCallbackRef() {
  const { itemContainerCallbackRefWithSubscribe } = useInternalContext();

  return useCallback(element => itemContainerCallbackRefWithSubscribe(element), [itemContainerCallbackRefWithSubscribe]);
}
