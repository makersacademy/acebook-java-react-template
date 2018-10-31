import React from 'react';
const client = require('../client');

class Comment extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.post_id = this.props.post.post_id)
        console.log(this.props.post)

    this.submit = this.submit.bind(this)

  }

  submit(){
  let that = this;
        let newComment = document.getElementById("newComment").value;
        fetch('api/comments', {
          method: "POST",
          body: JSON.stringify(newComment),
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
        }).then(response => {
                console.log(this.props)
          response.json().then(data => {
            that.props.setpost()
            console.log("Comment successful" + JSON.stringify(data));
          })
        })
   }

  render() {
    return (
      <div className="comment-main">
        <textarea id="newComment" placeholder="Enter your comment here"></textarea>
        <button onClick={() => this.submit()}>post comment</button>
      </div>
    )
  }
  
}

export default Comment;
