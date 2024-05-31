// src/CodeEditor.js

import React, { useState } from 'react';
import Prism from 'prismjs';
import 'prismjs/themes/prism.css';
import './CodeEditor.css'; // for custom styles

const CodeEditor = () => {
  const [code, setCode] = useState('');

  const handleChange = (e) => {
    setCode(e.target.value);
  };

  return (
    <div className="code-editor">
      <textarea
        className="code-input"
        value={code}
        onChange={handleChange}
        spellCheck="false"
      />
      <pre className="code-output">
        <code
          className="language-js"
          dangerouslySetInnerHTML={{
            __html: Prism.highlight(code, Prism.languages.javascript, 'javascript'),
          }}
        />
      </pre>
    </div>
  );
};

export default CodeEditor;
