import createEmotion from '@emotion/css/create-instance';
import PropTypes from 'prop-types';
import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';

import AutoCenter from './AutoCenter';
import computeScrollLeft from './computeScrollLeft';
import createBasicStyleSet from './createBasicStyleSet';
import createCSSKey from './util/createCSSKey';
import FunctionContext from './FunctionContext';
import getView from './getView';
import InternalContext from './InternalContext';
import LegacyContext from './LegacyContext';
import patchStyleOptions from './patchStyleOptions';
import PropsContext from './PropsContext';
import useAnimateScrollLeft from './hooks/internal/useAnimateScrollLeft';
import useCallbackRefWithSubscribe from './hooks/internal/useCallbackRefWithSubscribe';
import useObserveScrollLeft from './hooks/internal/useObserveScrollLeft';
import ViewContext from './ViewContext';

// We pool the emotion, so we don't create a new set of <style> for every component and reuse as much as we could.
const emotionPool = {};

const Composer = ({ children, dir, height, nonce, numItems, styleOptions, styleSet }) => {
  dir = dir === 'ltr' || dir === 'rtl' ? dir : undefined;

  const patchedStyleOptions = useMemo(() => patchStyleOptions(styleOptions), [styleOptions]);
  const patchedStyleSet = useMemo(
    () => styleSet || createBasicStyleSet(patchedStyleOptions),
    [patchedStyleOptions, styleSet]
  );

  const styleSetClassNames = useMemo(() => {
    const emotion =
      emotionPool[nonce] || (emotionPool[nonce] = createEmotion({ key: `react-film--css-${createCSSKey()}`, nonce }));

    return Object.fromEntries(Object.entries(patchedStyleSet).map(([name, style]) => [name, emotion.css(style) + '']));
  }, [nonce, patchedStyleSet]);

  const [_, forceRender] = useState();
  const itemContainerCallbackRefWithSubscribe = useCallbackRefWithSubscribe();
  const scrollableCallbackRefWithSubscribe = useCallbackRefWithSubscribe();
  const scrollLeftRef = useRef(null);
  const scrollTimeoutRef = useRef();

  useEffect(() => () => clearTimeout(scrollTimeoutRef.current), [scrollTimeoutRef]);

  const scrollTo = useCallback(
    scrollFn => {
      const view = getView(
        dir,
        scrollableCallbackRefWithSubscribe.current,
        itemContainerCallbackRefWithSubscribe.current,
        scrollLeftRef.current
      );

      if (view) {
        const { index, indexFraction } = view;
        const targetIndex = scrollFn({ index, indexFraction });

        if (typeof targetIndex === 'number') {
          scrollLeftRef.current = computeScrollLeft(
            dir,
            scrollableCallbackRefWithSubscribe.current,
            itemContainerCallbackRefWithSubscribe.current,
            targetIndex
          );
          forceRender({});
        }
      }
    },
    [dir, forceRender, itemContainerCallbackRefWithSubscribe, scrollableCallbackRefWithSubscribe, scrollLeftRef]
  );

  const scrollOneLeft = useCallback(() => {
    scrollTo(({ indexFraction }) => (dir === 'rtl' ? Math.floor(indexFraction) + 1 : Math.ceil(indexFraction) - 1));
  }, [dir, scrollTo]);

  const scrollOneRight = useCallback(() => {
    scrollTo(({ indexFraction }) => (dir === 'rtl' ? Math.ceil(indexFraction) - 1 : Math.floor(indexFraction) + 1));
  }, [dir, scrollTo]);

  const functionContext = useMemo(
    () => ({
      scrollTo,
      scrollOneLeft,
      scrollOneRight
    }),
    [scrollTo, scrollOneLeft, scrollOneRight]
  );

  const internalContext = useMemo(
    () => ({
      itemContainerCallbackRefWithSubscribe,
      scrollableCallbackRefWithSubscribe
    }),
    [itemContainerCallbackRefWithSubscribe, scrollableCallbackRefWithSubscribe]
  );

  const propsContext = useMemo(
    () => ({ dir, height, nonce, numItems, styleOptions: patchedStyleOptions, styleSetClassNames }),
    [dir, height, nonce, numItems, patchedStyleOptions, styleSetClassNames]
  );

  const [viewContext, setViewContext] = useState({
    index: 0,
    indexFraction: 0,
    scrollBarPercentage: '0%',
    scrollBarWidth: '0%',
    scrolling: false
  });

  // This will setViewContext and reset the "scrolling" flag after a period of time.
  const setViewContext2 = useCallback(
    nextViewContext => {
      setViewContext(nextViewContext);

      clearTimeout(scrollTimeoutRef.current);

      if (nextViewContext.scrolling) {
        scrollTimeoutRef.current = setTimeout(
          () =>
            setViewContext({
              ...nextViewContext,
              scrolling: false
            }),
          // eslint-disable-next-line no-magic-numbers
          500
        );
      }
    },
    [scrollTimeoutRef, setViewContext]
  );

  const handleScroll = useCallback(
    ({ fraction: scrollBarPercentage, initial, width: scrollBarWidth }) => {
      const view = getView(
        dir,
        scrollableCallbackRefWithSubscribe.current,
        itemContainerCallbackRefWithSubscribe.current,
        scrollLeftRef.current
      );

      if (view) {
        const { index, indexFraction } = view;

        setViewContext2({
          index,
          indexFraction,
          scrolling: !initial,
          scrollBarPercentage,
          scrollBarWidth
        });
      }
    },
    [dir, itemContainerCallbackRefWithSubscribe, scrollableCallbackRefWithSubscribe, scrollLeftRef, setViewContext2]
  );

  const handleScrollToEnd = useCallback(() => {
    scrollLeftRef.current = null;
    forceRender({});
  }, [forceRender, scrollLeftRef]);

  const legacyContext = useMemo(
    () => ({
      ...functionContext,
      ...internalContext,
      ...propsContext,
      ...viewContext
    }),
    [functionContext, internalContext, propsContext, viewContext]
  );

  useAnimateScrollLeft(
    typeof scrollLeftRef.current === 'number' && scrollableCallbackRefWithSubscribe.current,
    scrollLeftRef.current,
    handleScrollToEnd
  );

  useEffect(
    () =>
      scrollableCallbackRefWithSubscribe.subscribe(current => {
        if (current) {
          current.addEventListener('pointerdown', handleScrollToEnd, { passive: true });

          return () => current.removeEventListener('pointerdown', handleScrollToEnd);
        }
      }),
    [handleScrollToEnd, scrollableCallbackRefWithSubscribe]
  );

  useObserveScrollLeft(scrollableCallbackRefWithSubscribe, handleScroll);

  return (
    <PropsContext.Provider value={propsContext}>
      <InternalContext.Provider value={internalContext}>
        <FunctionContext.Provider value={functionContext}>
          <ViewContext.Provider value={viewContext}>
            <LegacyContext.Provider value={legacyContext}>
              {children}
              {patchedStyleOptions.autoCenter && <AutoCenter />}
            </LegacyContext.Provider>
          </ViewContext.Provider>
        </FunctionContext.Provider>
      </InternalContext.Provider>
    </PropsContext.Provider>
  );
};

Composer.defaultProps = {
  children: undefined,
  dir: undefined,
  height: undefined,
  nonce: undefined,
  styleOptions: undefined,
  styleSet: undefined
};

Composer.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.element), PropTypes.element]),
  dir: PropTypes.oneOf(['ltr', 'rtl']),
  height: PropTypes.number,
  nonce: PropTypes.string,
  numItems: PropTypes.number.isRequired,
  styleOptions: PropTypes.any,
  styleSet: PropTypes.any
};

export default Composer;
