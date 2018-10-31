import React from 'react';
import Comment from './comment'

class Post extends React.Component {
    constructor(props) {
    super(props);
    this.onDelete = this.onDelete.bind(this)
    }

  onDelete(post) {
     console.log("delete is being called *** " + this.props.post._links.self.href)
     fetch(this.props.post._links.self.href, {
        method: "DELETE",

        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
      }).then(response => {
          this.props.setpost();
          console.log("delete successful");
      })

  }

    render(){
    let date = new Date(this.props.post.createdAt).toString();
    return(
        <div className='post-main'>
            <div className='post-content'>
                        {this.props.post.content}
            </div>
            <div>{date}</div>
            <div><Comment post={this.props.post} setpost = {this.props.setpost}/></div>
            <div className="delete-btn">
                <br />
                <button onClick={this.onDelete} className="del-btn">Delete this post     <i className="fas fa-trash-alt"></i></button>
            </div>
        </div>
        )
    }
}

export default Post;
