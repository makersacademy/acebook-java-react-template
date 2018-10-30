import React from 'react';
import Comment from './comment'

class Comments extends React.Component {
    constructor(props) {
        super(props);
        this.getComments = this.getComments.bind(this);
    }

    render() {
        return (
            <article className='comments-main'>
                <h1 className='comments-title'>
                    Comments hahahah you suck
                </h1>
                <div className='comments-items'>
                    {this.getComments()}
                </div>
            </article>
        )
    }

    getComments() {
        return this.props.comments.map(comment =>
            <Comment key={comment._links.self.href} comment={comment}/>
        );
    }
}

export default Comments;
