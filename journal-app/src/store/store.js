import {createStore, combineReducers} from 'redux';
import { authReducer } from '../reducers/authReducer';

/* createStore es para crear nuestro store */
/* combinereducers es para poner los reducers que utilzaremos porque por defecto solo recibe uno createstore */

const reducers = combineReducers({
    auth: authReducer
});

/* necesitamos importar el store en el punto más alto de nuestra app, en journalapp */
export const store = createStore(
    reducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);