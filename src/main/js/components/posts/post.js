import React from 'react';
import Button from "../UI/Button/Button";
import Comment from "../Comments/Comment";
import Aux from "../../hoc/Aux/Aux";
import Comments from "../Comments/Comments";

const Post = (props) => {
	let comments = null;
	if(props.displayComments) {
		comments = <Comments
									comments={props.comments}
									user={props.user}
									post_id={props.post.id}
									updateComments={props.updateComments}
		/>
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
			<div className="controls">
				<Button btnType="Danger" clicked={props.deletePost}>Delete</Button>
				<Button
						btnType="Success"
						clicked={props.showComments}
						disabled={props.comments.length == 0}>
					{props.displayComments ? "Hide Comments" : `Show Comments (${props.comments.length})`  }
				</Button>
			</div>
		</div>
				{comments}
			</Aux>
	)
}

export default Post;
