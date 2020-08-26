import usePropsContext from './internal/usePropsContext';

export default function useDir() {
  const { dir } = usePropsContext();

  return [dir];
}
