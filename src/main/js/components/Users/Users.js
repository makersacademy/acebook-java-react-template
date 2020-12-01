import React, { Component } from 'react';
import client from '../../client';
import Aux from "../../hoc/Aux/Aux";
import User from "./User";
import Spinner from "../UI/Spinner/Spinner";
import Button from "../UI/Button/Button";

class Users extends Component {
  constructor(props) {
    super(props)
    this.state = {
      users: [],
      displayedUsers: [],
      loaded: false,
      search: ""
    }
    this.getUsers = this.getUsers.bind(this);
    this.getFriends = this.getFriends.bind(this);
    this.onSearch = this.onSearch.bind(this);
  }

  componentDidMount() {
    this.getUsers();
  }

  getUsers() {
    client({method: 'GET', path: '/api/users'}).then(response => {
      console.log(response);
      this.setState({
        users: response.entity._embedded.users,
        displayedUsers: response.entity._embedded.users,
        loaded: true});
    });
  }

  getFriends() {
    client({method: 'GET', path: '/users/'}).then(response => {
      console.log(response);
    });
  }

  inputChangeHandler(event) {
    this.setState({
      search: event.target.value.toLowerCase()
    });
  }

  onSearch(event) {
    event.preventDefault();
    if(this.state.search === "") {
      this.getUsers();
      return
    }
    let usersToDisplay = [...this.state.users];
    usersToDisplay = usersToDisplay.filter(user => {
      return user.firstName.toLowerCase().includes(this.state.search) ||
          user.lastName.toLowerCase().includes(this.state.search) ||
          user.email.toLowerCase().includes(this.state.search)
    });
    this.setState({
      displayedUsers: usersToDisplay
    });
  }

  render() {
    let users = <Spinner />

    if(this.state.loaded) {
      users = this.state.displayedUsers.map(user => {
        return <User
            key={user.id}
            user={user}
            />
      });
    }
    return (
        <Aux>
          <form onSubmit={this.onSearch}>
            <input type="text" value={this.state.search} onChange={(event) => this.inputChangeHandler(event)}/>
            <Button btnType="Success">Search</Button>
          </form>
          <Button btnType="Success" clicked={this.getFriends}>Test Friends</Button>
          <p>There are {this.state.users.length} users in the database.</p>
          {users}
        </Aux>
    )
  }
}

export default Users;