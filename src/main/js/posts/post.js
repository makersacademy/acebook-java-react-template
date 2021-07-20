import React from 'react';


const Post = (props) => {
	 // console.log(props.key)
	 // console.log(props.post.key)
	// console.log(props)
	 // console.log(props.post.id)
	 //console.log(props.post._links.self.href)
	 console.log(props.id)

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
					post id: {props.id}
					
				</p>
				<p>
				<a href={props.post._links.self.href}>Linky</a>
				</p>				
			</div>
			
		</div>
	)
}



export default Post;
