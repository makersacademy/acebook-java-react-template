import React from 'react';
import Button from "../UI/Button/Button";

const Comment = (props) => {
  return (
      <div className='comment-main'>
        <div className="comment-author">
          {`By: ${props.comment.user.firstName} ${props.comment.user.lastName}`}
        </div>
        <div className='comment-content'>
          {props.comment.content}
        </div>
        <div className="controls">
          <Button btnType="Danger" clicked={props.deleteComment}>Delete</Button>
        </div>
      </div>
  )
}

export default Comment;
