import React from 'react'
import { Link } from 'react-router-dom'


// The Header creates links that can be used to navigate
// between routes.


class Header extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <header>
                <nav>
                    <ul>
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/post'>posts</Link></li>
                        <li><Link to='/login'>logIn</Link></li>
                        <li><Link to='/signup'>SignUp</Link></li>
                    </ul>
                </nav>
            </header>
        )
    }

}

export default Header;