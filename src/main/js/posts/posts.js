import React from 'react';
import Post from './post'

class Posts extends React.Component {
  constructor(props) {
    super(props);
    this.getPosts = this.getPosts.bind(this);
  }

	render() {
		return (
      <div class="row">
      <article className='posts-main'>
        <h1 className='posts-title'>
        </h1>
  			<div className='posts-items'>
  				{this.getPosts()}
  			</div>
      </article>
    </div>
		)
	}

  getPosts() {
    return this.props.posts.map(post =>
			<Post key={post._links.self.href} post={post}/>
    )
    .reverse();
  }
}

export default Posts;
