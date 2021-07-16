const React = require('react');
const ReactDOM = require('react-dom');

import PostsBuilder from './posts/postsBuilder';
import PostForm from './form/postForm';
import Reservation from './form/MultiInputDemo';

class App extends React.Component {

  render() {
    return (
      <div className="App">
      <PostForm />
      <PostsBuilder />
      </div>
    )
  }
}

ReactDOM.render(
	<App />,
	document.getElementById('app')
)
