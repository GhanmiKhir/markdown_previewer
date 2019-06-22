import '../styles/App.scss';
import React, { Component } from 'react';
import Editor from './Editor';
import Preview from './Preview';
import $ from 'jquery';

class App extends Component {
  constructor(props) {
    super(props);
    const placeholder = `# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:
  
Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`
  
You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.com), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | ------------- 
Your content can | be here, and it | can be here...
And here. | Okay. | I think we get it.

- And of course, there are lists.
  - Some are bulleted.
      - With different indentation levels.
        - That look like this.


1. And there are numbered lists too.
1. Use just 1s if you want! 
1. But the list goes on...
- Even if you use dashes or asterisks.
* And last but not least, let's not forget embedded images:

![React Logo w/ Text](https://goo.gl/Umyytc)
`;

    this.state = {
      markup: placeholder
    };
  }

  onMarkupChange = value => {
    this.setState(() => ({ markup: value }));
  };

  componentDidMount() {
    $(document).on('focus blur', '#editor', function() {
      $('#editor').toggleClass('focused');
      $('#preview').toggleClass('focused');
    });
  }

  render() {
    return (
      <div id="app">
        <h1 className="title">Markdown Previewer</h1>
        <div className="app-display">
          <Editor
            markup={this.state.markup}
            onMarkupChange={this.onMarkupChange}
          />
          <Preview markup={this.state.markup} />
        </div>
      </div>
    );
  }
}

export default App;
