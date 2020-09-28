import React from 'react';

const Post = (props) => {
	return (
		<div className='post-main'>
			<div className='post-content'>
				{props.post.content}
			</div>
			<div className"post-name">
				{props.post.name}
			</div>
		</div>
	)
	console.log(props)
}

export default Post;
