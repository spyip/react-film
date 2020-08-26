import { useContext } from 'react';

import InternalContext from '../../InternalContext';

export default function useInternalContext() {
  const context = useContext(InternalContext);

  if (!context) {
    throw new Error('react-film: Hooks can only be used inside the component.');
  }

  return context;
}
