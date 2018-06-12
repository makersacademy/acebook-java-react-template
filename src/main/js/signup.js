const React = require('react');



class Signup extends React.Component {
	render() {

		return (
           <div class="span3">
              <h2>Sign Up</h2>
              <form>
              <label>First Name</label>
              <input type="text" name="firstname" class="span3" className = "first-name"/>
              <label>Last Name</label>
              <input type="text" name="lastname" class="span3" className = "last-name"/>
              <label>Email Address</label>
              <input type="email" name="email" class="span3" className = "email"/>
              <label>Password</label>
              <input type="password" name="password" class="span3" className = "password"/>
              <input type="submit" value="Sign up" class="btn btn-primary pull-right" className = "submit"/>
              <div class="clearfix"></div>
              </form>
           </div>
		)
	}
}

export default Signup;