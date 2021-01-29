/* Es el principal router de la app */

import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { LoginScreen } from '../components/login/LoginScreen';
import { Marvel } from '../components/marvel/Marvel';
import { Navbar } from '../components/ui/Nabvar';


export const AppRouter = () => {
    return (
        <Router>
      <div>
        <Navbar />

        <Switch>
            <Route exact path="/login" component={LoginScreen} />
            <Route exact path="/" component={Marvel} />
        </Switch>
      </div>
    </Router>
    )
}
