import { useEffect } from 'react';

export default function useTimeout(onTrigger, duration) {
  useEffect(() => {
    if (onTrigger) {
      const timeout = setTimeout(() => onTrigger(), duration);

      return () => clearTimeout(timeout);
    }
  }, [duration, onTrigger]);
}
