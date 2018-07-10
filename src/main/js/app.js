const React = require('react');
const ReactDOM = require('react-dom');

import PostsBuilder from './posts/postsBuilder'
import SignUp from './authentication/signup'
import SignIn from './authentication/signin'
import CookieChecker from './cookie/checkCookie'


class App extends React.Component {
    constructor(props){
        super(props);

    };

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
