import React, { memo, useCallback, useEffect, useState } from 'react';
import './App.css';
import GitHubLogo from './GitHubLogo.tsx';
import SourceCode from './SourceCode.tsx';
import TableOfContent from './TableOfContent.tsx';
import WebPage, { CodeEventHandler } from './WebPage.tsx';

function App() {
  const [tab, setTab] = useState(location.hash.replace(/^#/u, ''));
  const [code, setCode] = useState('');

  const handleCode = useCallback<CodeEventHandler>(
    data => {
      setCode(data.code);
    },
    [setCode]
  );

  useEffect(() => {
    const handleHashChange = () => {
      setCode('');
      setTab(location.hash.replace(/^#/u, ''));
    };

    window.addEventListener('hashchange', handleHashChange);

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, [setCode, setTab]);

  return (
    <div className="app">
      <div className="app__title-bar">
        <h1 className="app__title">
          &gt; react-film demo
          <div className="app__cursor" />
        </h1>
        <div>
          <a
            className="app__logo"
            href="https://github.com/spyip/react-film"
            rel="noopener noreferrer"
            target="_blank"
            title="GitHub repository"
          >
            <GitHubLogo />
          </a>
        </div>
      </div>
      <div className="app__pane app__pane--code app__pane--left">
        {tab ? <SourceCode code={code} /> : <TableOfContent />}
      </div>
      <div className="app__pane app__pane--right">{tab && <WebPage onCode={handleCode} src={tab} />}</div>
    </div>
  );
}

export default memo(App);
