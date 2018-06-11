import React from 'react';
import Post from './post'

const defaultProps = {
    posts: []
};

class Posts extends React.Component {
	render() {
		var posts = this.props.posts.map(post =>
			<Post key= {post._links.self.href} post={post}/>
		);
		return (

          <article className='posts-main'>
            <h1 className='posts-title' data-testid='title-content'>
              Posts
            </h1>
                <div className='posts-items' data-testid ='posts-content'>
                    {posts}
                </div>
          </article>

		)
	}
}

Posts.defaultProps = defaultProps;

export default Posts;
