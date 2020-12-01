import React from 'react';
import Posts from './posts'
import Aux from "../../hoc/Aux/Aux";
import Button from "../UI/Button/Button";
const client = require('../../client');

class PostsBuilder extends React.Component {
  constructor(props) {
    super(props)
    this.state = {posts: [], newPostText: ""};
    this.deletePost = this.deletePost.bind(this);
    this.getPosts = this.getPosts.bind(this);
    this.createPost = this.createPost.bind(this);
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

  inputChangeHandler(event) {
    this.setState({
      newPostText: event.target.value
    });
  }

  createPost(event) {
    event.preventDefault();
    client({method: 'POST',
      path: '/posts',
      entity: {"content": this.state.newPostText, "user_id": this.props.user.id },
      headers: {"Content-Type": "application/json"}
    }).then(response => {
      console.log(response);
      this.getPosts();
      this.setState({
        newPostText: ""
      })
    })

  }

	render() {
		return (
		    <Aux>
          <h3>New Post</h3>
          <form onSubmit={this.createPost}>
            <textarea
                cols="80"
                rows="6"
                value={this.state.newPostText}
                onChange={(event) => this.inputChangeHandler(event)}></textarea>
            <br/><br/>
            <Button btnType="Success">Post</Button>
          </form>
          <Posts posts={this.state.posts} deletePost={this.deletePost}/>
        </Aux>
		)
	}
}

export default PostsBuilder;
