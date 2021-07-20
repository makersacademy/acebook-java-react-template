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
			
              <div class="status-container border-a">
                  <div class="actions">
					  <p><a href="#" title="Edit">Edit</a></p>
                      <p><a href="#" title="Like">Like</a></p>
				  </div>
			  </div>
			   <div class="actions">
					<p>
					post id: {props.id}
					</p>
					<p>
					<a href={props.post._links.self.href}>Linky</a>
					</p>	
				  </div>
		  </div>
		</div>
	</div>
	)
}

export default Post;
