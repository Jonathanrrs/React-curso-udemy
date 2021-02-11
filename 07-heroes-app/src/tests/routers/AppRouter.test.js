import React from 'react';
import { mount } from "enzyme";
import { AppRouter } from '../../routers/AppRouter';
import { AuthContext } from '../../auth/AuthContext';

describe('Pruebas en AppRouter', () => {
    
    const contextValue = {
        /* probar funciones con jest.fn() */
        dispatch: jest.fn(),
        user: {
            logged: false
        }
    }

    test('Debe mostrar el login si no está autenticado ', () => {
        const wrapper = mount(
            /* el context es un high order component */
            <AuthContext.Provider value={contextValue}>
                <AppRouter />
            </AuthContext.Provider>
        );

        expect(wrapper).toMatchSnapshot();

    });

    test('Debe mostrar el componte marvel si está autenticado ', () => {

        const contextValue = {
            dispatch: jest.fn(),
            user: {
                logged: true,
                name: 'Ramiro'
            }
        }
        const wrapper = mount(
            /* el context es un high order component */
            <AuthContext.Provider value={contextValue}>
                <AppRouter />
            </AuthContext.Provider>
        );
        expect(wrapper.find('.navbar').exists()).toBe(true);
        
    });
    
    
});
