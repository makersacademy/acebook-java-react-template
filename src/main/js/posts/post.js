import React from 'react';

const Post = (props) => {
	return (
		<div className='post-main'>
			<div className='post-content'>
				{props.post.content}
			</div>
			<div className='post-name'>
				{props.post.name}
			</div>
			<div className='post-time'>
				{props.post.post_time}
			</div>
		</div>
	)
}

export default Post;
