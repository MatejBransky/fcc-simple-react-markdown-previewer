import React, { useState } from 'react';

import Editor from './Editor';
import Preview from './Preview';

export default function App() {
  const [content, setContent] = useState('Hello World!');

  function handleChange(event) {
    const { value } = event.target;
    setContent(value);
  }

  return (
    <div className="wrapper">
      <h1 className="title">A Simple React Markdown Previewer</h1>

      <div className="main">
        <Editor content={content} onChange={handleChange} />
        <Preview content={content} />
      </div>
    </div>
  );
}
