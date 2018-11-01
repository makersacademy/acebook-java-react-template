const React = require('react');
const ReactDOM = require('react-dom');

import PostsBuilder from './posts/postsBuilder'
import InputPost from './posts/inputPost'
import SignUp from './users/signUp'
import LogIn from './users/login'

class App extends React.Component {

  render() {
    return (
        <div>
            <SignUp />
            <LogIn />
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


