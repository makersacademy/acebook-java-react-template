import React from 'react';


class SignUp extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <section className='signup'>
                <h1 className='sign_up_header'>
                    Please enter your details
                </h1>
                <form>
                    <input type="email" name="email" placeholder="example@hello.com"/><br />
                    <input type="password" name="password" placeholder="XXXXXX"/><br />
                    <input type="text" name="name" placeholder="Xy Zello"/><br />
                    <button type="submit" name="sign_up">Sign up</button>
                </form>
            </section>
        )
    }

}



export default SignUp;

