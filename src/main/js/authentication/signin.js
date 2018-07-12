import React from "react";
const client = require('../client');
import SignUp from './signup'
import history from '../history'



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

        event.preventDefault();

       fetch('/login', {
            method: 'post',
            body: JSON.stringify(data),
            headers: {
             'Accept': 'application/json',
             'Content-Type': 'application/json'
                                      }
          }).then(function(response) {
            return response.json();
          }).then(function(data) {
            console.log('Created Gist:', data);
            document.cookie = "ACKL_token="+data.message;
            history.push('/signup')
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
            What sup Khie.
            <SignUp />
        </div>
       );
    }
}

export default SignIn;