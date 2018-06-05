const React = require('react');
const ReactDOM = require('react-dom');

import PostsBuilder from './posts/postsBuilder'

class App extends React.Component {

  render() {
    return (
      <PostsBuilder />
    )
  }
}

ReactDOM.render(
	<App />,
	document.getElementById('app')
)
