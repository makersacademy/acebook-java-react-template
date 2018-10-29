import React from 'react';

class Update extends React.Component {
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

export default Update;