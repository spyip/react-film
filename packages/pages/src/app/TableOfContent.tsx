import { micromark } from 'micromark';
import React, { memo, useEffect, useState } from 'react';
import './TableOfContent.css';

function TableOfContent() {
  const [html, setHTML] = useState<Readonly<{ __html: string }>>(() => ({ __html: '' }));

  useEffect(() => {
    const abortController = new AbortController();

    (async signal => {
      const res = await fetch('README.md', { signal });

      setHTML({ __html: micromark(await res.text(), undefined) });
    })(abortController.signal);

    return () => abortController.abort();
  }, [setHTML]);

  return <div className="table-of-content" dangerouslySetInnerHTML={html} />;
}

export default memo(TableOfContent);
