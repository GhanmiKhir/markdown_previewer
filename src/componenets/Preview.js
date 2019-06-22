import React from 'react';

const Preview = ({ markup }) => {
  const marked = require('marked');
  const renderer = new marked.Renderer();

  marked.setOptions({
    renderer: new marked.Renderer(),
    pedantic: false,
    gfm: true,
    tables: true,
    breaks: true,
    sanitize: false,
    smartLists: true,
    smartypants: false,
    xhtml: false
  });

  renderer.link = function(href, title, text) {
    return `<a target="_blank" href="${href}"> ${text} </a>`;
  };

  return (
    <div id="preview" className="focused">
      <div
        dangerouslySetInnerHTML={{
          __html: marked(markup, {
            renderer: renderer
          })
        }}
      />
    </div>
  );
};

export default Preview;
