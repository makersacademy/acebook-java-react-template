 const React = require('react');
 const ReactDOM = require('react-dom');


import PostsBuilder from './posts/postsBuilder'
//import PostContainer from './posts/post_frontend'
//import { BrowserRouter as Router, Route, Link, Switch, Redirect } from "react-router-dom"

class App extends React.Component {

  render() {
    return (
     <div>
      <PostsBuilder />

    </div>

    );
  }
}

ReactDOM.render(
	<App />,
	document.getElementById('app')
)
