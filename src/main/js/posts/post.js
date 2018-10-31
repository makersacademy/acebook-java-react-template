import React from 'react';
import Comment from "./comments/comment";
import Like from "./likes/like";

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
