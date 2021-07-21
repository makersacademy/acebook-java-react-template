import React from 'react';
import axios from 'axios';
import GetDate from './getDate';


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
    alert('Your post was submitted, ' + this.state.username);
    event.preventDefault();

    axios({
      method: 'post',
      url: '/api/posts',
      headers: { 'Content-Type': 'application/json' },
      data: {
        userName: this.state.username,
        content: this.state.content,
        id: this.state.id,
        date: `posted ${GetDate.getDate()}`,
      }
    });
    setTimeout(location.reload.bind(location), 3000);
  };


  render() {
    return (
        <div class="panel profile-info text-center">
          <form onSubmit={this.handleSubmit}>
              <textarea name="content" class="form-control input-lg p-text-area" rows="2" placeholder="What's going on?" onChange={this.handleContentChange}></textarea>
              <input type = 'text' name="username" class="form-control p-text-area" placeholder="Username" onChange={this.handleNameChange} />
              <input type="submit" class="btn btn-info pull-left" value="Post" />
           </form>
        </div>
        );
      }
    }

export default PostForm;
