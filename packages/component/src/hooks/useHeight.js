import usePropsContext from './internal/usePropsContext';

export default function useHeight() {
  const { height } = usePropsContext();

  return [height];
}
