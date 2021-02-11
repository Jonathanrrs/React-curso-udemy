import { authReducer } from "../../auth/authReducer";
import { types } from "../../types/types";

describe('Pruebas en authReducer', () => {
    
    test('Debe retornar el estado por defecto ', () => {
        const state = authReducer({logged: false}, {});
        expect(state).toEqual({logged:false})
    });

    test('Debe autenticar y colocar el name del usuario ', () => {
        const action = {
            type: types.login,
            payload: {
                name: 'Iliana'
            }
        }
        const state = authReducer({logged:false}, action);
        expect(state.name).toBe('Iliana');
        expect(state.logged).toBe(true);
    });

    test('Debe borrar el name del usuario y logged en false ', () => {
        const action = {
            type: types.logout

        }
        const state = authReducer({name: 'iliana', logged: true}, action);
        expect(state.logged).toBe(false);
        expect(state.name).toBeUndefined();
    });
    
    
    
})
