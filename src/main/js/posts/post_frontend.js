//const React = require('react');
//const ReactDOM = require('react-dom');
//require('react-dom');
import React from 'react';

class PostContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            content: "",
            post: ""
        };
        this.handleChange = this.handleChange.bind(this)
        this.handlePost = this.handlePost.bind(this)
    }

    handleChange(event) {
        this.setState({
            content: event.target.value
    });
  }

  handlePost(event) {
    event.preventDefault()
    // really wanted to call it post_post
    fetch('https://localhost:8080/',{
        method: "POST",
        body: JSON.stringify(this.state.content),
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
      }).then(response => {
        response.json().then(data =>{
          console.log("Post successful" + data);
        })
    })
  }

  render () {
      return
      <div>
        <form onSubmit={this.handlePost}>
            <input value={this.state.content} onChange={this.handleChange} />
          <button type='submit'>Submit!</button>
        </form>
        <h1>You posted: {this.state.post}</h1>
      </div>
  }
    
}