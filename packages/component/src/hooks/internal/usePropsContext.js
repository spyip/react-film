import { useContext } from 'react';

import PropsContext from '../../PropsContext';

export default function usePropsContext() {
  const context = useContext(PropsContext);

  if (!context) {
    throw new Error('react-film: Hooks can only be used inside the component.');
  }

  return context;
}
