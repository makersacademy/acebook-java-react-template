import React from 'react';

const Post = (props) => {
	return (
		
	<div class="container">
		<div class="panel">
          <div class="panel-body">
              <div class="user-details">
                  <h3><a href="#" class="#">{props.post.userName}</a></h3>
                  <p>{props.post.date}</p>
              </div>
              <div class="clearfix"></div>
              <p class="user-status">{props.post.content}</p>
			  <hr>
              <div class="status-container border-a">
                  <div class="actions">
					  <p><a href="#" title="Edit">Edit</a></p>
                      <p><a href="#" title="Like">Like</a></p>
				  </div>
			  </div>
		  </div>
		</div>
	</div>

			/*<div className='post-main'>
			<div className='post-content'>
				{props.post.content}

			</div>
			<div className='post-footer'>
				<p>
				<h3>Posted by:</h3>
				{props.post.userName}
				</p>
				<p>
				
				</p>
				<p>
				id: {props.post.id}
				</p>
				<div>
				<input type="submit" value="Edit" id={props.post.id} />
				</div>
			</div>
		</div>*/
	)
}

export default Post;
