import { useCallback } from 'react';

import useScrolling from '../useScrolling';
import useScrollTo from '../useScrollTo';
import useStyleOptions from '../useStyleOptions';
import useTimeout from './useTimeout';

export default function useAutoCenter() {
  const [{ autoCenter }] = useStyleOptions();
  const [scrolling] = useScrolling();
  const scrollTo = useScrollTo();

  const handleTrigger = useCallback(() => scrollTo(({ index }) => index), [scrollTo]);

  useTimeout(!autoCenter || scrolling ? undefined : handleTrigger, 0);
}
