import { useContext } from 'react';

import ViewContext from '../../ViewContext';

export default function useViewContext() {
  return useContext(ViewContext);
}
