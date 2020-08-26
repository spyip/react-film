import createEmotion from 'create-emotion';
import PropTypes from 'prop-types';
import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';

import AutoCenter from './AutoCenter';
import computeScrollLeft from './computeScrollLeft';
import createCSSKey from './util/createCSSKey';
import createStyleSheet from './createStyleSheet';
import FunctionContext from './FunctionContext';
import getView from './getView';
import InternalContext from './InternalContext';
import LegacyContext from './LegacyContext';
import patchStyleOptions from './patchStyleOptions';
import PropsContext from './PropsContext';
import useAnimateScrollLeft from './hooks/internal/useAnimateScrollLeft';
import useObserveScrollLeft from './hooks/internal/useObserveScrollLeft';
import ViewContext from './ViewContext';

// We pool the emotion, so we don't create a new set of <style> for every component and reuse as much as we could.
const pooledEmotion = {};

const Composer = ({ children, dir, height, nonce, numItems, styleOptions, styleSheet }) => {
  dir = dir === 'ltr' || dir === 'rtl' ? dir : undefined;

  const patchedStyleOptions = useMemo(() => patchStyleOptions(styleOptions), [styleOptions]);

  const styleSheetClassName = useMemo(() => {
    const emotion =
      pooledEmotion[nonce] ||
      (pooledEmotion[nonce] = createEmotion({ key: `css-react-film-${createCSSKey()}`, nonce }));

    return emotion.css(styleSheet || createStyleSheet(patchedStyleOptions)) + '';
  }, [nonce, patchedStyleOptions, styleSheet]);

  const [_, forceRender] = useState();
  const itemContainerRef = useRef();
  const scrollableRef = useRef();
  const scrollLeftRef = useRef(null);
  const scrollTimeoutRef = useRef();

  useEffect(() => () => clearTimeout(scrollTimeoutRef.current), [scrollTimeoutRef]);

  const scrollTo = useCallback(
    scrollFn => {
      const view = getView(dir, scrollableRef.current, itemContainerRef.current, scrollLeftRef.current);

      if (view) {
        const { index, indexFraction } = view;
        const targetIndex = scrollFn({ index, indexFraction });

        if (typeof targetIndex === 'number') {
          scrollLeftRef.current = computeScrollLeft(dir, scrollableRef, itemContainerRef, targetIndex);
          forceRender({});
        }
      }
    },
    [dir, forceRender, itemContainerRef, scrollableRef, scrollLeftRef]
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
      itemContainerRef,
      scrollableRef
    }),
    [itemContainerRef, scrollableRef]
  );

  const propsContext = useMemo(
    () => ({ dir, height, nonce, numItems, styleOptions: patchedStyleOptions, styleSheetClassName }),
    [dir, height, nonce, numItems, patchedStyleOptions, styleSheetClassName]
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
          500
        );
      }
    },
    [scrollTimeoutRef, setViewContext]
  );

  const handleScroll = useCallback(
    ({ fraction: scrollBarPercentage, initial, width: scrollBarWidth }) => {
      const view = getView(dir, scrollableRef.current, itemContainerRef.current, scrollLeftRef.current);

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
    [dir, itemContainerRef, scrollableRef, scrollLeftRef, setViewContext2]
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
    typeof scrollLeftRef.current === 'number' && scrollableRef.current,
    scrollLeftRef.current,
    handleScrollToEnd
  );

  useEffect(() => {
    const { current } = scrollableRef;

    if (current) {
      current.addEventListener('pointerdown', handleScrollToEnd, { passive: true });

      return () => current.removeEventListener('pointerdown', handleScrollToEnd);
    }
  }, [handleScrollToEnd, scrollableRef]);

  useObserveScrollLeft(scrollableRef.current, handleScroll);

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
  nonce: '',
  styleOptions: undefined,
  styleSheet: undefined
};

Composer.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.element), PropTypes.element]),
  dir: PropTypes.oneOf(['ltr', 'rtl']),
  height: PropTypes.number,
  nonce: PropTypes.string,
  numItems: PropTypes.number.isRequired,
  styleOptions: PropTypes.any,
  styleSheet: PropTypes.any
};

export default Composer;
