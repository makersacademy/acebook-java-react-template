const React = require('react');
const ReactDOM = require('react-dom');

import PostsBuilder from './posts/postsBuilder'
import InputPost from './posts/inputPost'

class App extends React.Component {

  render() {
    return (
        <div>
            <InputPost />
            <PostsBuilder />
        </div>
    )
  }
}

ReactDOM.render(
	<App />,
	document.getElementById('app')
)


