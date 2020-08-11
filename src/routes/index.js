import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import Signin from '../pages/Signin';
import SignUp from '../pages/SignUp';
import Dashboard from '../pages/Dashboard';

export default function Routes() {
    return (
        <Switch>
            <Route path="/" exact component={Signin} />
            <Route path="/dashboard" component={Dashboard} isPrivate/>
            <Route path="/register" component={SignUp} isPrivate />

            <Route path="/" component={() => <h1>404</h1>} />
        </Switch>
    )
}