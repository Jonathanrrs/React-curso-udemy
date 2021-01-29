/* Es el principal router de la app */

import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { LoginScreen } from '../components/login/LoginScreen';
import { DashboardRoutes } from './DashboardRoutes';



export const AppRouter = () => {
    return (
        <Router>
      <div>
        {/* esto lo  hacemos para que el login no tenga el estilo del otro router */}
        <Switch>
          <Route exact path="/login" component={LoginScreen} />
          {/* no debe ser exact porque sino no funciona */}
          <Route  path="/" component={DashboardRoutes} />
        </Switch>
      </div>
    </Router>
    )
}
