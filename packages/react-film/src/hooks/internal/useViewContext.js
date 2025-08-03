import { useContext } from 'react';

import ViewContext from '../../ViewContext.js';

export default function useViewContext() {
  return useContext(ViewContext);
}
