import { useCallback } from 'react';

import useScrolling from '../useScrolling.js';
import useScrollTo from '../useScrollTo.js';
import useStyleOptions from '../useStyleOptions.js';
import useTimeout from './useTimeout.js';

export default function useAutoCenter() {
  const [{ autoCenter }] = useStyleOptions();
  const [scrolling] = useScrolling();
  const scrollTo = useScrollTo();

  const handleTrigger = useCallback(() => scrollTo(({ index }) => index), [scrollTo]);

  useTimeout(!autoCenter || scrolling ? undefined : handleTrigger, 0);
}
