import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useAuthToken } from "../../login/useAuthToken";

const PrivateRoute = ({ component: Component, ...rest }) => {
    const authToken = useAuthToken();
    return <Route {...rest} render={props => (authToken ? <Component {...props} /> : <Redirect to="/login" />)} />;
};

export default PrivateRoute;
