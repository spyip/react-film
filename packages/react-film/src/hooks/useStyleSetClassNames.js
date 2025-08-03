import usePropsContext from './internal/usePropsContext.js';

export default function useStyleSetClassNames() {
  const { styleSetClassNames } = usePropsContext();

  return [styleSetClassNames];
}
