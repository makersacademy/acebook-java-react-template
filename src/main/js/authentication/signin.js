import React from "react";
const client = require('../client');

class SignIn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
     }

     handleChange (event) {
        this.setState({
            [event.target.name]: event.target.value
        })
      }

     handleSubmit (event) {
        var data = {
            username: this.state.username,
            password: this.state.password
        }
        console.log("Form values: ", data);
        event.preventDefault();

        client({method: 'POST', path: '/login', entity: data}).then(response => {
        console.log(response)
              this.setState({posts: response.entity._embedded.posts});
            });
     }

      render() {
        return (
        <div className="SignIn">
            <form onSubmit={this.handleSubmit}>
                <label>Sign In</label>
                <input type="text" placeholder="User name" name="username" value={this.state.username} onChange={this.handleChange}/>
                <input type="text" placeholder="Password" name="password" value={this.state.password} onChange={this.handleChange}/>
                <input type="submit" value="Submit"/>
            </form>
        </div>
       );
    }
}

export default SignIn;