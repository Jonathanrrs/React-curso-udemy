import { authReducer } from "../../reducers/authReducer";
import { types } from "../../types/types";

describe('Pruebas en authReducer', () => {

    test('Debe realizar el login ', () => {
        
        const initState = {};

        const action = {
            type: types.login,
            payload: {
                uid: 'abc',
                displayName: 'Jonathan'
            }
        };

        const state = authReducer(initState, action);
        expect(state).toEqual({
            uid: 'abc',
            name: 'Jonathan'
        })
    });

    test('Debe realizar el logout ', () => {
        
        const initState = {
            uid: 'abc',
            displayName: 'Jonathan'
        };

        const action = {
            type: types.logout,
        };

        const state = authReducer(initState, action);
        expect(state).toEqual({})
    });

    test('No debe hacer cambios en el state', () => {
        
        const initState = {
            uid: 'abc',
            displayName: 'Jonathan'
        };

        const action = {
            type: 'basura',
        };

        const state = authReducer(initState, action);
        expect(state).toEqual(initState)
    });
    
    
});
