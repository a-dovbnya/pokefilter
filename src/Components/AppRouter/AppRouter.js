import React, {Component} from 'react';
import {Route, Switch, Redirect, withRouter} from 'react-router-dom';

import App from '../App';

export class AppRouter extends Component {
    render(){
        return (
            <Switch>
                <Route path="/" exact component={App} />
                <Route path="/page/:id" component={App} />
                <Redirect to="/" />
            </Switch>
        );
    }
}

export default AppRouter;