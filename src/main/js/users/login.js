import React from 'react';


class LogIn extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <section className='login'>
                <h1 className='login_header'>
                    Welcome back!!! Please enter your details
                </h1>
                <form>
                    <input type="email" name="email" placeholder="example@hello.com"/><br />
                    <input type="password" name="password" placeholder="XXXXXX"/><br />
                    <button type="submit" name="login">Login</button>
                </form>
            </section>
        )
    }

}


export default LogIn;
