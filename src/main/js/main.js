import React from 'react'
import { Switch, Route } from 'react-router-dom'

import PostsBuilder from './posts/postsBuilder'
import InputPost from './posts/inputPost'
import SignUp from './users/signUp'
import LogIn from './users/login'


class Main extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <main>
                <Switch>
                    <Route exact path='/' component={InputPost}/>
                    <Route path='/post' component={PostsBuilder}/>
                    <Route path='/login' component={LogIn}/>
                    <Route path='/signup' component={SignUp }/>
                </Switch>
            </main>
        )
    }

}



export default Main;