import { useCallback } from 'react';

import useInternalContext from './internal/useInternalContext.js';

export default function useItemContainerCallbackRef() {
  const { itemContainerCallbackRefWithSubscribe } = useInternalContext();

  return useCallback(
    element => itemContainerCallbackRefWithSubscribe(element),
    [itemContainerCallbackRefWithSubscribe]
  );
}
