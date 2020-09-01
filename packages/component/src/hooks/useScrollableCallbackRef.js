import { useCallback } from 'react';

import useInternalContext from './internal/useInternalContext';

export default function useScrollableCallbackRef() {
  const { scrollableCallbackRefWithSubscribe } = useInternalContext();

  return useCallback(element => scrollableCallbackRefWithSubscribe(element), [scrollableCallbackRefWithSubscribe]);
}
