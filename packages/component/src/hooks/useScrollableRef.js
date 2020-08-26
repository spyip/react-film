import useInternalContext from './internal/useInternalContext';

export default function useScrollableRef() {
  const { scrollableRef } = useInternalContext();

  return scrollableRef;
}
