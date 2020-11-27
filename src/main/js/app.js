const React = require('react');
const ReactDOM = require('react-dom');
import { BrowserRouter, Route, Switch, Redirect, NavLink } from "react-router-dom";

import PostsBuilder from './posts/postsBuilder'
import Post from "./posts/post";
import Test from "./test";

class App extends React.Component {

  render() {
      let routes = (
          <Switch>
            <Route path="/index" component={PostsBuilder} />
              <Route path="/test2" component={Test} />
          </Switch>
      )
    return (
        <div>
        <NavLink
            to="/test2">Test2</NavLink>
            <NavLink
                to="/index">index</NavLink>
            {routes}
            </div>
    )
  }
}

const app = (
        <BrowserRouter>
            <App />
        </BrowserRouter>
)

console.log("loaded?")

ReactDOM.render(
	app,
	document.getElementById('app')
)
