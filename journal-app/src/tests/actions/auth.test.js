import { createStore } from 'redux';
import configureStore from 'redux-mock-store'; 
import thunk from 'redux-thunk';

import { login, logout, startLoginEmailPassword, startLogout } from "../../actions/auth";
import { types } from "../../types/types";

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

const initState = {};

let store = mockStore(initState);

describe('Pruebas con las acciones de auth', () => {

    beforeEach(() => {
        store = mockStore(initState);
    })

    test('Login y Logout deben de crear la acción respectiva ', () => {

        const uid = 'ABC123';
        const displayName = 'Jonathan';

        const loginAction = login(uid, displayName);
        const logoutAction = logout();

        expect(loginAction).toEqual({
            type: types.login,
            payload: {
                uid,
                displayName
            }
        });

        expect(logoutAction).toEqual({
            type: types.logout
        })

    });

    test('Debe realiar el logout ', async () => {
        
        await store.dispatch(startLogout());

        const actions = store.getActions();
    
        expect(actions[0]).toEqual({
            type: types.logout
        });

        expect(actions[1]).toEqual({
            type: types.notesLogoutCleaning
        });

    });

    test('Debe iniciar el startLoginEmailPassword ', async () => {
        await store.dispatch(startLoginEmailPassword('test@testing.com', '123456'));

        const actions = store.getActions();

        expect(actions[1]).toEqual({
            type: types.login,
            payload: {
                uid: 's8P1V1rL8VeVPRuey48sd8MZTn82',
                displayName: null
            }
        })

    });
    

    

})
