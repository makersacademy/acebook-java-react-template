import React from 'react';
import axios from 'axios';

class NewPost extends React.Component {
  constructor(props) {
    super(props);

  }

  submit() {
    var textAreaNewPost = document.getElementById("postInput").value;
    // client({method: 'POST', path: '/api/posts', entity: {"content": "hello"} }).then(response => {
    //   console.log(response);
    //   // this.setState({posts: response.entity._embedded.posts});
    // }).catch(e => {
    //   console.log(e);
    // });
    axios.post('/api/posts', {
      content: textAreaNewPost
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });

  }

	render() {
		return (

      <div>
        <textarea id="postInput">
        </textarea>
        <button onClick={() => this.submit()}>Post</button>
      </div>
		)
	}

}

export default NewPost;
