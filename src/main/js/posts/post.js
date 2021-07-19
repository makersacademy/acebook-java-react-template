import React from 'react';

const Post = (props) => {
	return (
		<div className='post-main'>
			<div className='post-content'>
				{props.post.content}

			</div>
			<div className='post-footer'>
				<p>
				<h3>Posted by:</h3>
				{props.post.userName}
				</p>
				<p>
					at: {props.post.date}
				</p>
				<p>
					post id: {props.post.id}
					
				</p>
				<p>
					<a href>Expand</a>
				</p>				
			</div>
			
		</div>
	)
}



export default Post;
