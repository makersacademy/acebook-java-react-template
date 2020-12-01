import React from 'react';
import Button from "../UI/Button/Button";

const Post = (props) => {
	return (
		<div className='post-main'>
			<div className="post-author">
				{`By: ${props.post.user.firstName} ${props.post.user.lastName}`}
			</div>
			<div className='post-content'>
				{props.post.content}
			</div>
			<Button btnType="Danger" clicked={props.deletePost}>Delete</Button>
		</div>
	)
}

export default Post;
