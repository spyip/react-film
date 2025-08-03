import { useContext } from 'react';

import FunctionContext from '../../FunctionContext.js';

export default function useFunctionContext() {
  const context = useContext(FunctionContext);

  if (!context) {
    throw new Error('react-film: Hooks can only be used inside the component.');
  }

  return context;
}
