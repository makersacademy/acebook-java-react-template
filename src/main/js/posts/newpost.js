import React from 'react';

class NewPost extends React.Component {
  constructor(props) {
    super(props);
    
  }

  submit() {

  }

	render() {
		return (
      <div>
      <button click={() => this.submit()} />
      </div>
		)
	}

}

export default NewPost;
