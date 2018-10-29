import React from 'react';
import Posts from './posts';
import NewPost from './newpost';
import axios from 'axios';

class PostsBuilder extends React.Component {
  constructor(props) {
    super(props)
    this.state = {posts: []};
  }

  componentDidMount() {
    axios.get('/api/posts')
    .then(response => {
      console.log(response);
      this.setState({posts: response.data._embedded.posts});
    });
    // client({method: 'GET', path: '/api/posts'}).then(response => {
    //   console.log(response);
    //   this.setState({posts: response.entity._embedded.posts});
    // });
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
