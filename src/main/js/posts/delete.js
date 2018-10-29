import React from 'react';

class Delete extends React.Component {
  constructor(props) {
    super(props);
    
  }

  delete() {

  }

	render() {
		return (
      <div>
      <button click={() => this.delete()}>Delete</button>
      </div>
		)
	}

}

export default Delete;