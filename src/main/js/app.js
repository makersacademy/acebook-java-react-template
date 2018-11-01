const React = require('react');
const ReactDOM = require('react-dom');

import { BrowserRouter } from 'react-router-dom'

import Header from './header'
import Main from './main'

import PostsBuilder from './posts/postsBuilder'
import InputPost from './posts/inputPost'
import SignUp from './users/signUp'
import LogIn from './users/login'

// this component will be rendered by our <___Router>
class App extends React.Component {

  render() {
    return (
        <div>
            {/*<SignUp />*/}
            {/*<LogIn />*/}
            {/*<InputPost />*/}
            {/*<PostsBuilder />*/}
            <Header />
            <Main />

        </div>
    )
  }
}

ReactDOM.render((
    <BrowserRouter>
        <App />
    </BrowserRouter>),
	document.getElementById('app')
)


