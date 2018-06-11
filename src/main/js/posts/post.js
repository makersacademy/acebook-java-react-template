import React from 'react';

class Post extends React.Component{
	render() {
		return (
			<div className='post-content' data-testid='post-content'>
        {this.props.post.comment} - {this.props.post.createdAt}
      </div>
		)
	}
}

export default Post;
