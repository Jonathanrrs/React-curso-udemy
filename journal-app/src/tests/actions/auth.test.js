import { login, logout } from "../../actions/auth";
import { types } from "../../types/types";

describe('Pruebas con las acciones de auth', () => {

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

})
