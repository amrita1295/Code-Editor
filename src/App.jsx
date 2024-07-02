// App.js
import React, { useEffect, useRef, useState } from 'react';
import Prism from 'prismjs';
import 'prismjs/themes/prism.css';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-python';
import 'prismjs/components/prism-java';
import 'prismjs/components/prism-c';
import './App.css';

const CodeEditor = () => {
  const [code, setCode] = useState(``);
  const [language, setLanguage] = useState('javascript');
  const textareaRef = useRef(null);

  const handleLanguageChange = (e) => {
    setLanguage(e.target.value);
  };

  const handleChange = (e) => {
    setCode(e.target.value);
  };

  useEffect(() => {
    Prism.highlightAll();
  }, [code, language]);

  return (
   <div>
    <h2 style={{textAlign:"center"}}>React-simple-code-editor </h2>
    <div className="code-editor">
      <select value={language} onChange={handleLanguageChange}>
        <option value="javascript">JavaScript</option>
        <option value="java">Java</option>
        <option value="python">Python</option>
        <option value="c">C</option>
        <option value="c++">C++</option>
      </select>
      <div className="editor-wrapper">
        <textarea
          ref={textareaRef}
          value={code}
          onChange={handleChange}
          className="code-input"
          spellCheck="false"
          autoCorrect="off"
          autoComplete='false'
        />
        <pre className={`code-output language-${language}`}>
          <code className={`language-${language}`}>{code}</code>
        </pre>
      </div>
    </div>
    </div>
  );
};

export default CodeEditor;
