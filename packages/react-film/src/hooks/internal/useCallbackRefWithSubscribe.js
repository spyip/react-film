import { useMemo } from 'react';

const SUBSCRIBER_LIMIT = 10;

export default function useCallbackRefWithSubscribe() {
  return useMemo(() => {
    const subscriptions = [];

    const callbackRef = current => {
      callbackRef.current = current;

      subscriptions.forEach(subscription => {
        subscription.cleanup && subscription.cleanup();
        subscription.cleanup = subscription.callback(current);
      });
    };

    callbackRef.subscribe = callback => {
      const subscription = { callback };

      subscriptions.push(subscription);

      if (subscriptions.length >= SUBSCRIBER_LIMIT) {
        console.warn(
          `useSubscribe: Reaching maximum limit of subscribers (${SUBSCRIBER_LIMIT}), please make sure your code did clean up properly.`
        );
      }

      subscription.cleanup = callback(callbackRef.current);

      return () => {
        subscription.cleanup && subscription.cleanup();

        const index = subscriptions.indexOf(subscription);

        ~index && subscriptions.splice(index, 1);
      };
    };

    return callbackRef;
  }, []);
}
