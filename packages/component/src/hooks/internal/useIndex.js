import useViewContext from './useViewContext';

export default function useIndex() {
  const { index } = useViewContext();

  return [index];
}
