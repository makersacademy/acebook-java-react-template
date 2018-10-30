import React from 'react';
import Comment from "./comments/comment";

const Post = (props) => {
	return (
		<div className='post-main'>
			<div className='post-content'>
				{props.post.content}
			</div>
			<Comment />
		</div>
	)
}

export default Post;
