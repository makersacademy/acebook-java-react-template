import React from 'react';
import Posts from './posts'
import Aux from "../../hoc/Aux/Aux";
import Button from "../UI/Button/Button";
const client = require('../../client');

class PostsBuilder extends React.Component {
  constructor(props) {
    super(props)
    this.state = {posts: []};
  }

  componentDidMount() {
    console.log("get posts")
    client({method: 'GET', path: '/api/posts'}).then(response => {
      console.log(response);
      this.setState({posts: response.entity._embedded.posts});
    });
  }

  postTester() {
    client({method: 'POST',
      path: '/api/posts',
      entity: {"content": "Test Post", "user_id": this.props.user.id },
      headers: {"Content-Type": "application/json"}
    }).then(response => {
      console.log(response);
    })
  }

	render() {
		return (
		    <Aux>
          <Button btnType="Success" clicked={this.postTester}>Test Post</Button>
          <Posts posts={this.state.posts}/>
        </Aux>
		)
	}
}

export default PostsBuilder;
