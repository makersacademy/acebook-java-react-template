import React from 'react';
import Post from './post';
import ExtractID from './ExtractID';

class Posts extends React.Component {
  constructor(props) {
    super(props);
    this.getPosts = this.getPosts.bind(this);
  }

	render() {
		return (
      <article className='posts-main'>
        <h1 className='posts-title'>
          Posts
        </h1>
  			<div className='posts-items'>
  				{this.getPosts()}
  			</div>
      </article>
		)
	}

  getPosts() {
    return this.props.posts.map(post =>
			<Post key={post._links.self.href} post={post} id={ExtractID.extractID(post._links.self.href)}/>
    )
    .reverse();
  }
}

export default Posts;
