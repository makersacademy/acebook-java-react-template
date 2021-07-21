 import React, { useState } from 'react';
 import axios from 'axios';
 // import EditForm from '../form/editForm';
 // import PostForm from '../form/postForm';
 import GetDate from '../form/getDate';


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






const Post = (props) => {
	const [count, setCount] = useState(0);
  const [showEditForm, setShowEditForm] = useState(false);
  const [updatedContent, setNewContent] = useState(props.post.content);
  let tempContent = '';

  const onEditBtnClick = () => {
    if (showEditForm === false) {
      setShowEditForm(true);
    } else {
      setShowEditForm(false);
    };
  };


  const handleContentChange = (event) => {
      // console.log(event.target.value);
      // setNewContent(event.target.value);
      // console.log(updatedContent);
      tempContent = event.target.value;
      console.log('in handle' + tempContent);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(tempContent);
    setNewContent(tempContent);
    console.log(updatedContent);
    alert('Your post was updated');


    axios({
      method: 'put',
      url: `/api/posts/${props.id}`,
      headers: { 'Content-Type': 'application/json' },
      data: {
        userName: props.post.userName,
        content: tempContent,
        id: props.id,
        date: `updated ${GetDate.getDate()}`,
      }
    });
    setTimeout(location.reload.bind(location), 3000);
  };

  // const EditForm = () => <div><PostForm /></div>;

  const InLineEditForm = () =>
  <div>
    <div class="panel profile-info text-center">
      <form onSubmit={handleSubmit}>
          <textarea name="content" class="form-control input-lg p-text-area" rows="2" defaultValue={updatedContent} onChange={handleContentChange} autoFocus></textarea>
          <button class='btn btn-danger' onClick={onEditBtnClick}> Cancel </button>
          <span>        </span>
          <input type="submit" class="btn btn-success" value="Update" />
       </form>
    </div>
  </div>;

// Return output below

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
