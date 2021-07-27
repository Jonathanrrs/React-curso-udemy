import React from 'react';
import { AppRouter } from './router/AppRouter';
import {Provider} from 'react-redux';
import { store } from './componentes/store/store';


export const CalendarApp = () => {
    return (
        <Provider store={store}>
            <AppRouter />
        </Provider>
    )
}

