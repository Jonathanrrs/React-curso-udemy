import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom";
import { LoginScreen } from '../componentes/auth/LoginScreen';
import { CalendarScreen } from '../componentes/calendar/CalendarScreen';

export const AppRouter = () => {
    return (
        <>
            <Router>
                <div>
                    <Switch>
                        <Route path="/login" exact component={LoginScreen}></Route>
                        <Route path="/" exact component={CalendarScreen}></Route>
                        <Redirect to="/" />
                    </Switch>
                </div>
            </Router>
        </>

    )
}
