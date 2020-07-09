import React from 'react';
import {Route} from 'react-router-dom'; 
import Login from './Login';
import {useGlobalState} from '../config/globalState'


function PrivateRoute(props) {
    const {store} = useGlobalState();
    const {loggedInUser} = store;
    const {component:Component, options, ...rest} = props
    return (
        <Route {...rest} render={(routeProps) => {
            return loggedInUser ? <Component {...routeProps} {...options} /> : <Login redirectedFrom={rest.path} {...routeProps} />
        }} />
    )
}

export default PrivateRoute;
