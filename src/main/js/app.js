const React = require('react');
const ReactDOM = require('react-dom');
const client = require('./client');

import Posts from './posts/posts'

class App extends React.Component {

	constructor(props) {
		super(props);
		this.state = {posts: []};
	}

  componentDidMount() {
    client({method: 'GET', path: '/api/posts'}).then(response => {
      this.setState({posts: response.entity._embedded.posts});
    });
  }

  render() {
    return (
      <Posts posts={this.state.posts}/>
    )
  }
}

ReactDOM.render(
	<App />,
	document.getElementById('app')
)
