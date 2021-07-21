import React from 'react';
import axios from 'axios';


class EditForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: {props.post.content},
      username: {props.post.userName},
      content: {props.post.content}
    };

    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleContentChange = this.handleContentChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleContentChange(event) {
    this.setState({content: event.target.value});
  }

  handleSubmit(event) {
    alert('Your post was updated, ' + this.state.username);
    event.preventDefault();

    axios({
      method: 'put',
      url: `/api/posts/${props.id}`,
      headers: { 'Content-Type': 'application/json' },
      data: {
        userName: this.state.username,
        content: this.state.content,
        id: this.state.id,
        date: this.getDate(),
      }
    });
    setTimeout(location.reload.bind(location), 3000);
  };

  getDate(){
      const months = new Array('January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December');
      const date = new Date();
      const mins = `${(date.getMinutes()<10?'0':'')}` + `${date.getMinutes()}`;
      const today = `${date.getDate()} ${months[date.getMonth()]} at ${date.getHours()}:${mins}`;

      return today;
  };

  render() {
    return (
        <div class="panel profile-info text-center">
          <form onSubmit={this.handleSubmit}>
              <textarea name="content" class="form-control input-lg p-text-area" rows="2" placeholder="What's going on?" onChange={this.handleContentChange}></textarea>
              <button class='btn btn-danger' onClick={onCancelClick}> Cancel </button>
              <span>        </span>
              <input type="submit" class="btn btn-success" value="Update" />

           </form>
        </div>
        );
      }
    }

export default EditForm;
