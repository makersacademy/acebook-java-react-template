const React = require('react');
const ReactDOM = require('react-dom');

import PostsBuilder from './posts/postsBuilder'
import SignUp from './authentication/signup'
import SignIn from './authentication/signin'


class App extends React.Component {

  render() {
    return (
            <div>
                 <SignUp />
                 <PostsBuilder />
                 <SignIn />
            </div>
    )
  }
}

ReactDOM.render(
	<App />,
	document.getElementById('app')
)
