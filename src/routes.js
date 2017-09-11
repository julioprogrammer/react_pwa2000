import React from 'react';
import {Route, Router, Redirect, hashHistory} from 'react-router';

import Home from './containers/Home';

const Routes = props => (
    <Router history={hashHistory}>
        <Route path='/' component={Home} />
        <Redirect from='*' to='/' />
    </Router>
);

export default Routes;