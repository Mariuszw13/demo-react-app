import React from 'react';
import './App.css';
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Redirect
} from "react-router-dom";
import MainPage from "./containers/MainPage";
import LoginPage from "./containers/LoginPage";
import {CookiesProvider} from 'react-cookie';
import PrivateRoute from "./components/auth/PrivateRoute";
import {withLayout} from "./components/Layout";
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => (
    <CookiesProvider>
        <Router>
            <Switch>
                <Route path="/login" exact component={LoginPage}/>
                <PrivateRoute exact path="/" component={withLayout(MainPage)}/>
                <Redirect from="*" to="/"/>
            </Switch>
        </Router>
    </CookiesProvider>

)

export default App;