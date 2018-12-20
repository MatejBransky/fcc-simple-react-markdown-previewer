import React from 'react';
import marked from 'marked';

export default function Preview(props) {
  const markdown = marked(props.content);

  return (
    <div>
      <header>Preview</header>
      <div id="preview" dangerouslySetInnerHTML={{ __html: markdown }} />
    </div>
  );
}
