import React, { memo, useCallback, useEffect } from 'react';
import {
  custom,
  object,
  optional,
  parse,
  pipe,
  readonly,
  safeParse,
  string,
  type InferInput,
  type InferOutput
} from 'valibot';
import './WebPage.css';

const codeMessageEventDataSchema = pipe(object({ code: string() }), readonly());

type CodeEventHandler = (data: InferOutput<typeof codeMessageEventDataSchema>) => void;

const propsSchema = pipe(
  object({
    onCode: optional(custom<CodeEventHandler>(value => typeof value === 'function')),
    src: string()
  }),
  readonly()
);

type Props = InferInput<typeof propsSchema>;

function WebPage(props: Props) {
  const { onCode, src } = parse(propsSchema, props);

  const handleMessage = useCallback<(event: MessageEvent) => void>(event => {
    const result = safeParse(codeMessageEventDataSchema, event.data);

    result.success && onCode?.(result.output);
  }, []);

  useEffect(() => {
    window.addEventListener('message', handleMessage);

    return () => window.removeEventListener('message', handleMessage);
  }, [handleMessage]);

  return <iframe className="web-page" src={src} />;
}

export default memo(WebPage);
export { propsSchema, type CodeEventHandler, type Props };
