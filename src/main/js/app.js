const React = require('react');
const ReactDOM = require('react-dom');
import { BrowserRouter, Route, Switch, Redirect, NavLink } from "react-router-dom";

import PostsBuilder from './posts/postsBuilder';
import Layout from "./hoc/Layout/Layout";
import Home from "./components/Home/Home";

class App extends React.Component {

	render() {
			let routes = (
					<Switch>
						<Route path="/" component={Home} />
						<Route path="/index" component={PostsBuilder} />
					</Switch>
			)
		return (
				<Layout>
					<div>
          	{routes}
					</div>
        </Layout>
		)
	}
}

const app = (
				<BrowserRouter>
						<App />
				</BrowserRouter>
);

ReactDOM.render(
	app,
	document.getElementById('app')
)
