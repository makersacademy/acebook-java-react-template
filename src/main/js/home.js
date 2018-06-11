const React = require('react');
const client = require('./client');

import Posts from './posts/posts'

class Home extends React.Component {

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
    return (<div>
      <Posts posts={this.state.posts.reverse()}/>
      </div>
    )
  }
}

export default Home;
