import React from 'react';
import ReactDOM from 'react-dom';

import Home from './home';
import SignUp from './signup';
import { BrowserRouter as Router, Route} from 'react-router-dom';


ReactDOM.render(
	        <Router>
                <Route path={"/"} component = {Home} />
                 <Route path={"/signup"} component = {SignUp} />
            </Router>,
	document.getElementById('app')
)
