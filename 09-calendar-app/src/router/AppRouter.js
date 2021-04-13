import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import { CalendarApp } from '../CalendarApp';
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
                    </Switch>
                </div>
            </Router>
        </>

    )
}
