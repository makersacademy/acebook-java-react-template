import React from 'react';
import ReactDOM from 'react-dom';

import Home from './home';
import Signup from './signup';
import { BrowserRouter as Switch, Route} from 'react-router-dom';


ReactDOM.render(
	        <Switch>
	            <div>
                    <Route exact path={"/"} component = {Home} />
                    <Route path={"/signup"} component = {Signup} />
                </div>
            </Switch>,
	document.getElementById('app')
)
