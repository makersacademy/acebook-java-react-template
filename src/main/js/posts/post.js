import React from 'react';

const Post = (props) => {
	return (
		<div className='post-main'>
			<div className='post-content'>
				{props.post.content}
			</div>
        <button onClick={props.handleDelete}>Delete</button>
        <h1> {props.post.id} </h1>
		</div>
	)
}

export default Post;
