import React from 'react';
import Button from "../UI/Button/Button";
import Comment from "../Comments/Comment";
import Aux from "../../hoc/Aux/Aux";

const Post = (props) => {
	let comments = null;
	if(props.displayComments) {
		comments = props.comments.map(comment => {
			return <Comment
					key={comment.id}
					comment={comment}/>
		});
	}
	return (
			<Aux>
		<div className='post-main'>
			<div className="post-author">
				{`By: ${props.post.user.firstName} ${props.post.user.lastName}`}
			</div>
			<div className='post-content'>
				{props.post.content}
			</div>
			<Button btnType="Danger" clicked={props.deletePost}>Delete</Button>
			<Button btnType="Success" clicked={props.showComments}>
				{props.displayComments ? "Hide Comments" : "Show Comments"}
			</Button>
		</div>
				{comments}
			</Aux>
	)
}

export default Post;
