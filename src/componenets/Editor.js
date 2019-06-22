import React from 'react';

const Editor = ({ markup, onMarkupChange }) => {
  return (
    <textarea
      onChange={e => onMarkupChange(e.target.value)}
      name="editor"
      id="editor"
      value={markup}
    />
  );
};

export default Editor;
