import usePropsContext from './internal/usePropsContext';

export default function useStyleSetClassNames() {
  const { styleSetClassNames } = usePropsContext();

  return [styleSetClassNames];
}
