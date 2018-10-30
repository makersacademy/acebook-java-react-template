
import React from 'react';
const client = require('../client');


class CreatePost extends React.Component {
    constructor(props) {
        super(props)
        this.submit = this.submit.bind(this)
        
    }

    submit(){
      let newPost = document.getElementById("newPost").value;
      fetch('api/posts', {
        method: "POST",
        body: JSON.stringify(newPost),
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
      }).then(response => {
        response.json().then(data => {
          this.props.setpost()
          console.log("Post successful" + JSON.stringify(data));
        })
      })
    
  }

  render () {
      return(
      <div>
        <textarea id="newPost" placeholder="Enter your post here">
        </textarea>
        <button onClick={() => this.submit()}>Post</button>
      </div>
 
      )
    }
}
export default CreatePost;