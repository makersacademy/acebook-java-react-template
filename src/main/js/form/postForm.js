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
        date: this.getDate(),
      }
    });
    location.reload();
  };

  getDate(){
      const months = new Array('January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December');
      const date = new Date();
      const mins = `${(date.getMinutes()<10?'0':'')}` + `${date.getMinutes()}`;
      const today = `${date.getDate()} ${months[date.getMonth()]} at ${date.getHours()}:${mins}`;

      return today;
  };

  /*render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Message:
           <textarea name="content" placeholder="enter post" onChange={this.handleContentChange} />
       <p><input type="text" name="username" placeholder="enter username" onChange={this.handleNameChange} /></p>
                    
       <input type="text" name="username" placeholder="Username" onChange={this.handleNameChange} />

        </label>
        <input type="submit" value="Post" />
      </form>
    );
  }
}*/

  render() {
    return (
        <div class="panel profile-info text-center">
          <form onSubmit={this.handleSubmit}>
              <textarea name="content" class="form-control input-lg p-text-area" rows="2" placeholder="What's going on?" onChange={this.handleContentChange}></textarea>
              <textarea name="username" class="form-control p-text-area" rows="1" placeholder="Username" onChange={this.handleNameChange}></textarea>
              <input type="submit" class="btn btn-info pull-left" value="Post" />
           </form>
        </div>
        );
      }
    }

export default PostForm;