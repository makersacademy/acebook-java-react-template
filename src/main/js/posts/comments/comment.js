import React from 'react';
import InputComment from './inputComment'


class Comment extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <article className='comment-main'>
                <div className='comment-content'>
                    {/*{props.comment.content}*/}
                </div>
                <InputComment/>
            </article>
        )
    }

}



export default Comment;
