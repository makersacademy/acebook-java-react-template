const React = require('react');
const ReactDOM = require('react-dom');

import PostsBuilder from './posts/postsBuilder'

class App extends React.Component {

  render() {
    return (
//    <h1> chickens. </h1>
      <PostsBuilder />
    )
  }
}

ReactDOM.render(
	<App />,
	document.getElementById('app')
)
