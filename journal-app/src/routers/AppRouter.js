import React, { useEffect, useState } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Redirect
} from 'react-router-dom';
import { JournalScreen } from '../components/journal/JournalScreen';
import { AuthRouter } from './AuthRouter';
import { firebase } from '../firebase/firebase-config';
import { useDispatch } from 'react-redux';
import { login } from '../actions/auth';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';
import { loadNotes } from '../helpers/loadNotes';
import { setNotes } from '../actions/notes';


export const AppRouter = () => {

    const dispatch = useDispatch();

    const [checking, setChecking] = useState(true);

    const [isLoggedIn, setIsLoggedIn] = useState(false);



    /* mantener el state si se recarga la página */
    useEffect(() => {
        firebase.auth().onAuthStateChanged(async(user) => {

            if (user?.uid) {
                dispatch(login(user.uid, user.displayName));
                setIsLoggedIn(true);

                const notes = await loadNotes(user.uid);
                dispatch(setNotes(notes));
            } else {
                setIsLoggedIn(false)
            }
            /* si tenemos el usuario mostramos la vista */
            setChecking(false);

        });


    }, [dispatch, setChecking, setIsLoggedIn])

    if (checking) {
        return (
            <h1>Wait...</h1>
        )
    }

    return (
        <Router>
            <div>
                <Switch>
                    <PublicRoute
                        path="/auth"
                        component={AuthRouter}
                        isAuthenticated={isLoggedIn}
                    >
                    </PublicRoute>

                    <PrivateRoute
                        exact
                        path="/"
                        component={JournalScreen}
                        isAuthenticated={isLoggedIn}
                    >
                    </PrivateRoute>
                    <Redirect to="/auth/login" />
                </Switch>
            </div>
        </Router>
    )
}
