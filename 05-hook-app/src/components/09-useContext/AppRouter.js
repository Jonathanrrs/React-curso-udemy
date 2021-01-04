import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
  } from 'react-router-dom';
import { AboutScren } from './AboutScren';
import { HomeScreen } from './HomeScreen';
import { LoginScreen } from './LoginScreen';
import { NavBar } from './NavBar';

/* exact es para que sea exacto el nombre de las rutas */

export const AppRouter = () => {
    return (
        <Router>
            <div>
                <NavBar />
                <Switch>
                    <Route exact path="/" component={HomeScreen}/>
                    <Route exact path="/about" component={AboutScren}/>
                    <Route exact path="/login" component={LoginScreen}/>
                    {/* <Route component={HomeScreen}/> no importa el path, te manda al home */}
                    <Redirect to="/" />
                </Switch>
            </div>
        </Router>
    )
}
