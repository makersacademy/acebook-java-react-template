const React = require('react');
const ReactDOM = require('react-dom');

import {BrowserRouter, Route, Switch, browserHistory } from 'react-router-dom'

import  history from 'history'

import PostsBuilder from './posts/postsBuilder'
import SignUp from './authentication/signup'
import SignIn from './authentication/signin'
import CookieChecker from './cookie/checkCookie'



class App extends React.Component {
    constructor(props){
        super(props);
s
    };

  render() {
    return (

                <div>

                     <PostsBuilder />

                </div>

    )
  }
}

ReactDOM.render(
        <BrowserRouter history={browserHistory}>
          <Switch>
          <Route path="/" exact component={App} />
          <Route path="/signin" exact component={SignIn} />
          <Route path="/signup" exact component={SignUp} />
          </Switch>
         </BrowserRouter>,
	document.getElementById('app')
)
