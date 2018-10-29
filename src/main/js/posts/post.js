import React from 'react';
import Delete from './delete.js'
import Update from './update.js'

const Post = (props) => {

	return (
		<div className='post-main'>
			<Delete key={props.key} />
			<Update content={props.post.content} key={props.key} />
			<div className='post-content'>
				{props.post.content}
			</div>
		</div>
	)
}

export default Post;
