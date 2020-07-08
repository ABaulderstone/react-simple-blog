import React from 'react';
import {Route, useParams, useHistory} from 'react-router-dom'
import {useGlobalState} from '../config/globalState';
import Login from './Login';

function PrivateRoute(props) {
    
    const {store} = useGlobalState();
    const {loggedInUser} = store;
    const {component:Component, options, ...rest} = props;
    const history = useHistory();
    
    
    
    return (
        <Route {...rest} render={(routeProps)  => {
            return loggedInUser ? <Component {...routeProps} {...options} /> : <Login {...routeProps} redirectedFrom={history.location.pathname} />
        }}/>
    )
}

export default PrivateRoute;
