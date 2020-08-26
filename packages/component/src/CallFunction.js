import { useEffect } from 'react';

const CallFunction = ({ arg, fn }) => {
  useEffect(() => {
    fn && fn(arg);
  }, [arg, fn]);

  return false;
};

export default CallFunction;
