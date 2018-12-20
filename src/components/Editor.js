import React from 'react';

export default function Editor(props) {
  return (
    <div>
      <header>Editor</header>
      <textarea
        name="editor"
        id="editor"
        cols="30"
        rows="50"
        value={props.content}
        onChange={props.onChange}
      />
    </div>
  );
}
