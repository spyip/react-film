declare type RenderHookResult<T = any, P = {}> = {
  rerender: (props: P) => void;
  result: { current: T };
  unmount: () => void;
};

declare const cleanup: () => void;
declare const renderHook: <T, P>(render: (props: P) => T, options?: { initialProps: P }) => RenderHookResult<T, P>;
declare const unmount: () => void;

declare const export_: { cleanup: typeof cleanup; renderHook: typeof renderHook; unmount: typeof unmount };

export = export_;
