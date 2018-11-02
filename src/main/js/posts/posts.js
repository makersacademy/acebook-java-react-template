import React from 'react';
import Post from './post'

class Posts extends React.Component {
  constructor(props) {
    super(props);
    this.getPosts = this.getPosts.bind(this);
  }

	render() {
		return (
      <article className='posts-main'>
        <h1 className='posts-title'>
          Posts hahahah you suck
        </h1>
  			<div className='posts-items'>
  				{this.getPosts()}
  			</div>
      </article>
		)
	}

  getPosts() {
    const posts = this.props.posts.map(post =>
        <Post key={"post-" + post.id} post={post} />
    );
    return posts;
  }
}

export default Posts;
