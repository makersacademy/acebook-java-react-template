import React, { Component } from 'react';
import client from '../../client';
import Aux from "../../hoc/Aux/Aux";
import User from "./User";
import Spinner from "../UI/Spinner/Spinner";

class Users extends Component {
  constructor(props) {
    super(props)
    this.state = {users: [], loaded: false};
  }

  componentDidMount() {
    client({method: 'GET', path: '/api/users'}).then(response => {
      console.log(response);
      this.setState({users: response.entity._embedded.users, loaded: true});
    });
  }

  render() {
    let users = <Spinner />

    if(this.state.loaded) {
      users = this.state.users.map(user => {
        return <User
            key={user.id}
            user={user}/>
      });
    }
    return (
        <Aux>
          <p>There are {this.state.users.length} users in the database.</p>
          {users}
        </Aux>
    )
  }
}

export default Users;