import React from 'react';
import { Route ,Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
export const PrivateRoute = ({ /* aqui ..., es el rest */
    isAuthenticated,
    component: Component,
    ...rest
}) => {

    localStorage.setItem('lastpath', rest.location.pathname);

    return (
        <Route {...rest}
            component={ (props) => (
                (isAuthenticated)
                    ? <Component {...props} /> /* ..., aqui es el spread */
                    : (<Redirect to="/login" />)
            )}
        />
    )
}


PrivateRoute.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
    component: PropTypes.func.isRequired
}