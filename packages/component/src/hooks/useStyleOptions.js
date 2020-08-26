import usePropsContext from './internal/usePropsContext';

export default function useStyleOptions() {
  const { styleOptions } = usePropsContext();

  return [styleOptions];
}
