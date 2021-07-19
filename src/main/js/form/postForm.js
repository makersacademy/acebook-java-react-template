import React from 'react';
import axios from 'axios';


class PostForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      username: '',
      content: ''
    };

    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleContentChange = this.handleContentChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const name = target.name;
    // const value = target.value;

    this.setState({
      [name]: value
    });
  }

  handleNameChange(event) {
    this.setState({username: event.target.value});
  }

  handleContentChange(event) {
    this.setState({content: event.target.value});
  }

  handleSubmit(event) {
    alert('In handleSubmit, username: ' + this.state.username + ', content: ' + this.state.content);
    event.preventDefault();

    axios({
      method: 'post',
      url: '/api/posts',
      headers: { 'Content-Type': 'application/json' },
      data: {
        userName: this.state.username,
        content: this.state.content,
        date: 'today biatch!'
      }
    });
  };



  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Message:
           <textarea name="content" placeholder="enter post" onChange={this.handleContentChange} />
		   <p><input type="text" name="username" placeholder="enter username" onChange={this.handleNameChange} /></p>
        </label>
        <input type="submit" value="Post" />
      </form>
    );
  }
}

export default PostForm;