import React, { memo, useEffect, useState } from 'react';
import { codeToHtml } from 'shiki';
import { object, parse, pipe, readonly, string, type InferInput } from 'valibot';
import './SourceCode.css';
import prettify from './private/prettify.ts';

const propsSchema = pipe(
  object({
    code: string()
  }),
  readonly()
);

type Props = InferInput<typeof propsSchema>;

function SourceCode(props: Props) {
  const { code } = parse(propsSchema, props);

  const [prettifiedCode, setPrettifiedCode] = useState<string>('');
  const [htmlCode, setHTMLCode] = useState<Readonly<{ __html: string }> | undefined>(undefined);

  useEffect(() => {
    let unmounted = false;

    setHTMLCode(undefined);
    setPrettifiedCode('');

    (async () => {
      const prettifiedCode = await prettify(code);

      unmounted || setPrettifiedCode(prettifiedCode);
    })();

    return () => {
      unmounted = true;
    };
  }, [code, setHTMLCode, setPrettifiedCode]);

  useEffect(() => {
    let unmounted = false;

    (async () => {
      const htmlCode = await codeToHtml(prettifiedCode, {
        lang: 'javascript',
        tabindex: -1,
        theme: 'dark-plus'
      });

      unmounted || setHTMLCode({ __html: htmlCode });
    })();

    return () => {
      unmounted = true;
    };
  }, [prettifiedCode]);

  return (
    <div className="source-code">
      {htmlCode ? (
        <div className="source-code__code source-code__code--shiki" dangerouslySetInnerHTML={htmlCode} />
      ) : (
        <pre className="source-code__code source-code__code--plain">{prettifiedCode}</pre>
      )}
    </div>
  );
}

export default memo(SourceCode);
