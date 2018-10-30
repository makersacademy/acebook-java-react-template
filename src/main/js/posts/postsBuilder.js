import React from 'react';
import Posts from './posts'
import CreatePost from './createpost'

const client = require('../client');

class PostsBuilder extends React.Component {
  constructor(props) {
    super(props)
    this.state = {posts: []};
    this.setNewPost = this.setNewPost.bind(this);
     }

  componentDidMount() {
    this.setNewPost()
    // client({method: 'GET', path: '/api/posts'}).then(response => {
    //   this.setState({posts: response.entity._embedded.posts});
    // });
  }

  setNewPost(){
    client({method: 'GET', path: '/api/posts'}).then(response => {
      this.setState({posts: response.entity._embedded.posts});
    });
  }

	render() {
		return (
      <div>
        <CreatePost setpost = {this.setNewPost}/>
        <Posts posts={this.state.posts}/>
      </div>
      
		)
	}
}

export default PostsBuilder;
