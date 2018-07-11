import React from 'react';

const Post = (props) => {
	return (
		<div className='post-main'>
		    <div className='image'>
		        <img src="/user-placeholder.png"  height="100" width="100"/>
		    </div>
		    <div className='content-timestamp'>
		        <div className='post-timestamp'>
                    {props.post.time_created}
                </div>
                <div className='post-content'>
                    <span>Posted at: </span>
                    {props.post.content}
                </div>

            </div>
		</div>
	)
}

export default Post;
