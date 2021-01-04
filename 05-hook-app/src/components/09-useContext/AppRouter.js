import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from 'react-router-dom';
import { AboutScren } from './AboutScren';
import { HomeScreen } from './HomeScreen';
import { LoginScreen } from './LoginScreen';

/* exact es para que sea exacto el nombre de las rutas */

export const AppRouter = () => {
    return (
        <Router>
            <div>
                <Switch>
                    <Route exact path="/" component={HomeScreen}/>
                    <Route exact path="/about" component={AboutScren}/>
                    <Route exact path="/login" component={LoginScreen}/>
                </Switch>
            </div>
        </Router>
    )
}
