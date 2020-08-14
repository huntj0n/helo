import React from 'react'
import {Switch, Route} from 'react-router-dom';
import Auth from './Components/Auth/auth';
import Dashboard from './Components/Dashboard/dashboard';
import Form from './Components/Form/form';
import Post from './Components/Post/post';

export default (
    <Switch>
        <Route componenet={Auth} exact path="/"/>
        <Route componenet={Dashboard} path="/dashboard"/>
        <Route componenet={Post} path="/post/:postid"/>
        <Route componenet={Form} path="/new"/>
    </Switch>
)
