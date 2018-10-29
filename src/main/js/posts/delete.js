import React from 'react';
import axios from 'axios';

class Delete extends React.Component {
  constructor(props) {
    super(props);

  }

  delete() {
      console.log(this.props.post._links.post.href);
      var urlPath = this.props.post._links.post.href;
      var deleteObject = {
        method: 'delete',
        url: urlPath
      }

      axios(deleteObject);

  }

	render() {
    console.log(this.props);
		return (
      <div>
      <button onClick={() => this.delete()}>Delete</button>
      </div>
		)
	}

}

export default Delete;
