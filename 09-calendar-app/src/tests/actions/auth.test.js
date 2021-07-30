import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import Swal from 'sweetalert2';
import '@testing-library/jest-dom';
import { startLogin } from '../../actions/auth';
import { types } from '../../types/types';

jest.mock('sweetalert2', () => ({
    fire: jest.fn()
}));

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

const initState = {};

let store = mockStore(initState);

Storage.prototype.setItem = jest.fn();

describe('Pruebas en las acciones Auth', () => {
    beforeEach(() => {
        store = mockStore(initState);
        jest.clearAllMocks(); /* para que las test no traigan info basura */
    });

    test('startLogin correcto ', async () => {
        
        await store.dispatch(startLogin('jona@gmail.com', '123456'));
        const actions = store.getActions();
        
        expect(actions[0]).toEqual({
            type: types.authLogin,
            payload: {
                uid: expect.any(String),
                name: expect.any(String),
            }
        });

        expect(localStorage.setItem).toHaveBeenCalledWith('token', expect.any(String));
        expect(localStorage.setItem).toHaveBeenCalledWith('token-init-date', expect.any(Number));
    });

    test('startLogin incorrecto ', async() => {
        await store.dispatch(startLogin('jona@gmail.com', '1234561'));
        let actions = store.getActions();

        expect(actions).toEqual([]);

        expect(Swal.fire).toHaveBeenCalledWith('Error', 'Password incorrecto', 'error')
        
        await store.dispatch(startLogin('jjona@gmail.com', '123456'));
        actions = store.getActions();
        expect(Swal.fire).toHaveBeenCalledWith('Error', 'El usuario no existe con ese email', 'error')

    });
    
    
});
