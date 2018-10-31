import React from 'react';

const Post = (props) => {
	let date = new Date(props.post.createdAt).toString();
	return (
		<div className='post-main'>
			<div className='post-content'>
				{props.post.content} 
				<div>{date}</div>
			</div>
		</div>
	)
}

export default Post;
