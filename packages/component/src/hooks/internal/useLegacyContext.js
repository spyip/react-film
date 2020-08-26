import { useContext } from 'react';

import LegacyContext from '../../LegacyContext';

export default function useLegacyContext() {
  const context = useContext(LegacyContext);

  if (!context) {
    throw new Error('react-film: Hooks can only be used inside the component.');
  }

  return context;
}
