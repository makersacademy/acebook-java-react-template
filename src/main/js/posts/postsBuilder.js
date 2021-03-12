import React from 'react';
import Posts from './posts'
import NewPost from './newPost'
const client = require('../client');

class PostsBuilder extends React.Component {
  constructor(props) {
    super(props)
    this.state = {posts: []};
    this.updatePosts = this.updatePosts.bind(this);
  }

  updatePosts(data) {
    this.setState({posts: this.state.posts.concat([data])})
  }

  componentDidMount() {
    client({method: 'GET', path: '/api/posts'}).then(response => {
      this.setState({posts: response.entity._embedded.posts});
    });
  }

	render() {
		return (
	    <div id='post-list'>
            <NewPost updatePosts={this.updatePosts}/>
            <Posts posts={this.state.posts}/>
        </div>
		)
	}
}

export default PostsBuilder;
