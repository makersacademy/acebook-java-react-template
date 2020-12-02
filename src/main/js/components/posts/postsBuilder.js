import React from 'react';
import Posts from './posts'
import Aux from "../../hoc/Aux/Aux";
import Button from "../UI/Button/Button";
const client = require('../../client');

class PostsBuilder extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      posts: [],
      newPostText: "",
      showCommentId: null
    };
    this.deletePost = this.deletePost.bind(this);
    this.getPosts = this.getPosts.bind(this);
    this.createPost = this.createPost.bind(this);
    this.createComment = this.createComment.bind(this);
    this.getComments = this.getComments.bind(this);
    this.showComments = this.showComments.bind(this);
  }

  componentDidMount() {
    this.getPosts();
  }

  getPosts() {
    console.log("get posts")
    client({method: 'GET', path: '/posts'}).then(response => {
      console.log(response);
      let posts = response.entity;
      this.setState({
        posts: []
      })
      posts.forEach(post => {
        this.getComments(post);
      })
    });
  }

  getComments(post) {
    client({method: 'GET', path: '/comments/' + post.id}).then(response => {
      console.log(response);
      post.comments = response.entity;
      let posts = [...this.state.posts];
      posts.push(post);
      this.setState({
        posts: posts
      });
    });
  }

  showComments(post_id) {
    console.log("show comments called")
    console.log(post_id);
    if(this.state.showCommentId == post_id) {
      this.setState({
        showCommentId: null
      });
    } else {
      this.setState({
        showCommentId: post_id
      });
    }
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

  createComment(event) {
      event.preventDefault();
      client({method: 'POST',
        path: '/comments',
        entity: {"content": "test comment", "user_id": this.props.user.id, "post_id": 1 },
        headers: {"Content-Type": "application/json"}
      }).then(response => {
        console.log(response);
      })
    }

	render() {
		return (
		    <Aux>
          <h3>New Post</h3>
          <Button btnType="Success" clicked={this.createComment}>Test comment</Button>
          <form onSubmit={this.createPost}>
            <textarea
                cols="80"
                rows="6"
                value={this.state.newPostText}
                onChange={(event) => this.inputChangeHandler(event)}></textarea>
            <br/>
            <Button btnType="Success">Post</Button>
          </form>
          <Posts
              posts={this.state.posts}
              deletePost={this.deletePost}
              showCommentId={this.state.showCommentId}
              showComments={this.showComments}/>
        </Aux>
		)
	}
}

export default PostsBuilder;
