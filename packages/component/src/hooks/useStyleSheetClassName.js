import usePropsContext from './internal/usePropsContext';

export default function useStyleSheetClassName() {
  const { styleSheetClassName } = usePropsContext();

  return [styleSheetClassName];
}
