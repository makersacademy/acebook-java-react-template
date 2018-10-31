import React from 'react';
import Comment from './comment'

class Post extends React.Component {
    constructor(props) {
    super(props);
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
        </div>
        )
    }
}

export default Post;
