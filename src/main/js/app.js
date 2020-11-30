const React = require('react');
const ReactDOM = require('react-dom');
import { BrowserRouter, Route, Switch, Redirect, NavLink } from "react-router-dom";
import client from './client';
import PostsBuilder from './components/posts/postsBuilder';
import Layout from "./hoc/Layout/Layout";
import Home from "./components/Home/Home";
import Users from "./components/Users/Users";

class App extends React.Component {
	constructor(props) {
		super(props)
		this.state = {user: null};
	}

	componentDidMount() {
		client({method: 'GET', path: '/getuser'}).then(response => {
			console.log(response);
			// this.setState({posts: response.entity._embedded.posts});
		});
	}

	render() {
			let routes = (
					<Switch>
						<Route path="/users" component={Users} />
						<Route path="/posts" component={PostsBuilder} />
						<Route path="/" exact component={Home} />
						<Redirect to="/" />
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
