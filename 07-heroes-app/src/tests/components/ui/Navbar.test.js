import React from 'react';
import { mount } from "enzyme";
import { AuthContext } from '../../../auth/AuthContext';
import { Navbar } from '../../../components/ui/Nabvar';
import { MemoryRouter, Router } from 'react-router-dom';
import { types } from '../../../types/types';

describe('Pruebas en Navbar', () => {

    /* para emplear el usehistory */
    const historyMock = {
        push: jest.fn(),
        replace: jest.fn(),
        location: {},
        /* esto lo pide en el historymock */
        listen: jest.fn(),
        createHref: jest.fn()
    }

    const contextValue = {
        dispatch: jest.fn(),
        user: {
            logged: true,
            name: 'Joni'
        }
    }
    const wrapper = mount(
      <AuthContext.Provider value={contextValue}>
          <MemoryRouter>
              <Router history={historyMock}>
                <Navbar />
              </Router>
          </MemoryRouter>
      </AuthContext.Provider>
    );

    /* es conveniente hacerlo de cada una de las pruebas */
    afterEach(() => {
        jest.clearAllMocks();
    })
    
    test('Debe mostrarse correctamente ', () => {
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('.text-info').text().trim()).toBe('Joni');
    });

    test('Debe llamar el logout y usar history ', () => {
        wrapper.find('button').prop('onClick')();

        expect(contextValue.dispatch).toHaveBeenCalledWith({
            type: types.logout
        });

        expect(historyMock.replace).toHaveBeenCalledWith('/login');
    });
    
    
});
