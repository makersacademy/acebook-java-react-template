const React = require('react');
const ReactDOM = require('react-dom');

import PostsBuilder from './posts/postsBuilder'
import SignUp from './authentication/signup'


class App extends React.Component {

  render() {
    return (
            <div>
                 <SignUp />
                 <PostsBuilder />
            </div>
    )
  }
}

ReactDOM.render(
	<App />,
	document.getElementById('app')
)
