import React, { Component } from 'react';
import client from '../../client';

class Users extends Component {
  constructor(props) {
    super(props)
    this.state = {users: []};
  }

  componentDidMount() {
    client({method: 'GET', path: '/api/users'}).then(response => {
      console.log(response);
      this.setState({users: response.entity._embedded.users});
    });
  }

  render() {
    return (
        <p>There are {this.state.users.length} users in the database.</p>
    )
  }
}

export default Users;