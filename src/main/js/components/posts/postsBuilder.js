import React from 'react';
import Posts from './posts'
import Aux from "../../hoc/Aux/Aux";
import Button from "../UI/Button/Button";
const client = require('../../client');

class PostsBuilder extends React.Component {
  constructor(props) {
    super(props)
    this.state = {posts: []};
    this.postTester = this.postTester.bind(this);
    this.deletePost = this.deletePost.bind(this);
    this.getPosts = this.getPosts.bind(this);
  }

  componentDidMount() {
    this.getPosts();
  }

  getPosts() {
    console.log("get posts")
    client({method: 'GET', path: '/posts'}).then(response => {
      console.log(response);
      this.setState({posts: response.entity});
    });
  }

  deletePost(id) {
    console.log("deleting")
    client({method: 'DELETE',
      path: '/api/posts/' + id
    }).then(response => {
      console.log(response);
      this.getPosts();
    })
  }

  postTester() {
    client({method: 'POST',
      path: '/posts',
      entity: {"content": "Test Post", "user_id": 2 },
      headers: {"Content-Type": "application/json"}
    }).then(response => {
      console.log(response);
    })
  }

	render() {
		return (
		    <Aux>
          <Button btnType="Success" clicked={this.postTester}>Test Post</Button>
          <Posts posts={this.state.posts} deletePost={this.deletePost}/>
        </Aux>
		)
	}
}

export default PostsBuilder;
