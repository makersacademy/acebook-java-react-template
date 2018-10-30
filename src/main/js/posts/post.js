import React from 'react';
import Comment from "./comments/comment";
import Like from "./comments/like";

const Post = (props) => {
	return (
		<div className='post-main'>
			<div className='post-content'>
				{props.post.content}
			</div>
            <Like />
			<Comment />
		</div>
	)
}

export default Post;
