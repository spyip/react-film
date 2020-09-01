import { useEffect } from 'react';
import memoize from 'memoize-one';

import debounce from '../../util/debounce';

function sleepZero() {
  return new Promise(resolve => setTimeout(() => resolve()));
}

export default function useObserveScrollLeft(callbackRefWithSubscribe, observer) {
  useEffect(
    () =>
      callbackRefWithSubscribe.subscribe(current => {
        if (!current) {
          return;
        }

        const memoizedEmitValue = memoize(
          (initial, fraction, width) => observer && observer({ initial, fraction, width })
        );

        const emitValue = initial => {
          const { offsetWidth, scrollLeft, scrollWidth } = current;

          memoizedEmitValue(
            initial,
            `${scrollWidth === offsetWidth ? 0 : (scrollLeft / (scrollWidth - offsetWidth)) * 100}%`,
            `${(offsetWidth / scrollWidth) * 100}%`
          );
        };

        const handleScroll = () => emitValue(false);

        const handlePointerOver = debounce(() => {
          // We need to send "onScroll" because "scrollWidth" might have changed
          // For example, the container resized, the scroll width will be incorrect
          // We will debounce to prevent "pointerOver" calculating too often
          // We will memoize to prevent firing unnecessary "onScroll"
          emitValue(false);
        });

        current.addEventListener('pointerover', handlePointerOver, { passive: true });
        current.addEventListener('scroll', handleScroll, { passive: true });

        (async function () {
          if (current.scrollWidth === current.offsetWidth) {
            // HACK: Chrome 66 will initially say scrollWidth equals to offsetWidth, until some time later
            await sleepZero();
          }

          emitValue(true);
        })();

        return () => {
          current.removeEventListener('pointerover', handlePointerOver);
          current.removeEventListener('scroll', handleScroll);
        };
      }),
    [callbackRefWithSubscribe, observer]
  );
}
