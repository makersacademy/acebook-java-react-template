import React from 'react';
import Delete from './delete.js'
import Update from './update.js'

const Post = (props) => {
	console.log(props);
	// var key = get digit of props.post._links.href
	return (
		<div className='post-main'>
			<Delete post={props.post} />
			<Update content={props.post.content} key={props.key} />
			<div className='post-content'>
				{props.post.content}
			</div>
		</div>
	)
}

export default Post;
