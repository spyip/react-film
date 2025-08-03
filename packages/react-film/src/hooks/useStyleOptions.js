import usePropsContext from './internal/usePropsContext.js';

export default function useStyleOptions() {
  const { styleOptions } = usePropsContext();

  return [styleOptions];
}
