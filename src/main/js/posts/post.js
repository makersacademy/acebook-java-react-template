import React from 'react';

const Post = (props) => {
	return (
		<div className='post-main'>

			<div className='post-avatar'>
				<img src="https://vignette.wikia.nocookie.net/lotr/images/e/e7/Gandalf_the_Grey.jpg/revision/latest/top-crop/width/360/height/450?cb=20121110131754"/>
			</div>
			<div className='post-box'>
				<div className='post-content'>
					{props.post.content}
				</div>
				<div className='post-footer'>
					<div className='post-info'>
						<span className='post-name'>
							{props.post.name}
						</span>
						<span className='post-time'>
							{props.post.post_time}
						</span>
					</div>
				</div>
				{/*<div className="post-actions">*/}
				{/*	<a href="#">Reply</a>*/}
				{/*</div>*/}
			</div>
		</div>

	)
}

export default Post;
