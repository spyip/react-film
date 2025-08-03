import usePropsContext from './internal/usePropsContext.js';

export default function useHeight() {
  const { height } = usePropsContext();

  return [height];
}
