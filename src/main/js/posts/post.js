 import React, { useState } from 'react';
 import axios from 'axios';
 // import EditForm from '../form/editForm';
 import PostForm from '../form/postForm';


const deletePost = (id) => {
		axios.delete(`/api/posts/${id}`)
			/* .then(() => setStatus('Delete successful'));*/
	}

const handleDeleteClick = (id) => {
	event.preventDefault();
	deletePost(id);
	alert('Post deleted, please wait for page reload');
	setTimeout(location.reload.bind(location), 3000);
}

const handleSubmit = (event) => {
  alert('Your post was updated, ' + this.state.username);
  event.preventDefault();

  axios({
    method: 'put',
    url: `/api/posts/${props.id}`,
    headers: { 'Content-Type': 'application/json' },
    data: {
      userName: this.state.username,
      content: this.state.content,
      id: this.state.id,
      date: this.getDate(),
    }
  });
  setTimeout(location.reload.bind(location), 3000);
};


const Post = (props) => {
	const [count, setCount] = useState(0);
  const [showEditForm, setShowEditForm] = useState(false);

  const onEditBtnClick = () => {
    if (showEditForm === false) {
      setShowEditForm(true);
    } else {
      setShowEditForm(false);
    };
  };

  const EditForm = () => <div><PostForm /></div>;

  const InLineEditForm = () =>
  <div>
    <div class="panel profile-info text-center">
      <form >
          <textarea name="content" class="form-control input-lg p-text-area" rows="2" value={props.post.content}></textarea>
          <button class='btn btn-danger' onClick={onEditBtnClick}> Cancel </button>
          <span>        </span>
          <input type="submit" class="btn btn-success" value="Update" />

       </form>
    </div>
  </div>;

  const TestEditForm = () =>
    <div>
      testing working
    </div>;

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

					<p>
            <button class='btn btn-secondary' onClick={() => setCount(count + 1)}> &#128077;({count}) </button>
  					<span>       </span>
            <button class='btn btn-warning' onClick={onEditBtnClick}> Edit </button>
            <span>       </span>
            <button class='btn btn-danger' onClick={() => { handleDeleteClick(props.id) }}> Delete </button>
          </p>

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
          <div>
            {showEditForm ? <InLineEditForm /> : null}
          </div>
		  </div>
		</div>
	</div>
	)
}

export default Post;

/*
*/
