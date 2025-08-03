import usePropsContext from './internal/usePropsContext.js';

export default function useDir() {
  const { dir } = usePropsContext();

  return [dir];
}
