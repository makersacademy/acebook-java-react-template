import React from 'react';
import Post from './post'

class Posts extends React.Component {
	render() {
		var posts = this.props.posts.map(post =>
			<Post key={post._links.self.href} post={post}/>
		);
		return (
      <article className='posts-main'>
        <h1 className='posts-title'>
          Posts
        </h1>
  			<div className='posts-items'>
  				{posts}
  			</div>
      </article>
		)
	}
}

export default Posts;
