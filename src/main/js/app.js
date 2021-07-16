const React = require('react');
const ReactDOM = require('react-dom');

import PostsBuilder from './posts/postsBuilder';
import postForm from '.form/postForm';

class App extends React.Component {

  render() {
    return (
      <div className="App">
      <postForm />
      <PostsBuilder />
      </div>
    )
  }
}

ReactDOM.render(
	<App />,
	document.getElementById('app')
)
