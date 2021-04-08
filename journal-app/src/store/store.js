import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import { authReducer } from '../reducers/authReducer';

import thunk from 'redux-thunk';
import { uiReducer } from '../reducers/uiReducer';
/* esto es para habilitar las extensiones de devtools y aplicar middleware */
const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;



/* createStore es para crear nuestro store */
/* combinereducers es para poner los reducers que utilzaremos porque por defecto solo recibe uno createstore */

const reducers = combineReducers({
    auth: authReducer,
    ui: uiReducer
});

/* necesitamos importar el store en el punto más alto de nuestra app, en journalapp */
export const store = createStore(
    reducers,
    composeEnhancers(
        applyMiddleware(thunk) /* trabajar acciones asincronas */
    )
);