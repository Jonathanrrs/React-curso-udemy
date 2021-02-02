/* Es el principal router de la app */

import React, { useContext } from 'react';
import {
  BrowserRouter as Router,
  Switch,
} from "react-router-dom";

import { AuthContext } from '../auth/AuthContext';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';

import { LoginScreen } from '../components/login/LoginScreen';
import { DashboardRoutes } from './DashboardRoutes';


export const AppRouter = () => {

  const { user } = useContext(AuthContext);

  return (
    <Router>
      <div>
        {/* esto lo  hacemos para que el login no tenga el estilo del otro router */}
        <Switch>
          <PublicRoute exact path="/login" component={LoginScreen} isAuthenticated={user.logged} />
          {/* no debe ser exact porque sino no funciona */}
          {/* aqui ponemos nuestro funcional component para proteger las rutas en caso de no logeado */}
          <PrivateRoute path="/" component={DashboardRoutes} isAuthenticated={user.logged} />
        </Switch>
      </div>
    </Router>
  )
}
