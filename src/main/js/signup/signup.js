import React from "react";
import client from "../client";

class SignUp extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            Firstname: '',
            Lastname: '',
            Username: '',
            Email: '',
            Password: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleSubmit(event) {
     event.preventDefault();
     var data = {
               firstname : this.state.Firstname,
               lastname : this.state.Lastname,
               username : this.state.Username,
               email : this.state.Email,
               password : this.state.Password

               }

               $.ajax({
                  url: "http://localhost:8080/api/users",
                  type: "POST",
                  data: JSON.stringify(data),
                  contentType:"application/json"
               });
    }

    render() {
        return(
            <form id="form" onSubmit={this.handleSubmit}>
                <label>
                    First Name
                    <input type="text" name ="Firstname" value={this.state.Firstname} onChange={this.handleChange}/>
                </label>
                 <label>
                    Last Name
                    <input type="text" name ="Lastname"value={this.state.Lastname} onChange={this.handleChange}/>
                </label>
                 <label>
                    Username
                    <input type="text" name="Username" value={this.state.Username} onChange={this.handleChange}/>
                </label>
                 <label>
                    Email
                    <input type="text" name="Email" value={this.state.Email} onChange={this.handleChange}/>
                </label>
                <label>
                    Password
                    <input type="password" name="Password" value={this.state.Password} onChange={this.handleChange}/>
                </label>
                <input type="submit" value="Submit"/>
             </form>
         )
    }
}

export default SignUp;