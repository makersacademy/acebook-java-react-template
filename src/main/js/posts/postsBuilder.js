import React from 'react';
import Posts from './posts';
import NewPost from './newpost';
const client = require('../client');

class PostsBuilder extends React.Component {
  constructor(props) {
    super(props)
    this.state = {posts: []};
  }

  componentDidMount() {
    client({method: 'GET', path: '/api/posts'}).then(response => {
      console.log(response);
      this.setState({posts: response.entity._embedded.posts});
    });
  }

	render() {
		return (
      <div>
        <NewPost />
        <Posts posts={this.state.posts}/>
      </div>
		)
	}
}

export default PostsBuilder;
