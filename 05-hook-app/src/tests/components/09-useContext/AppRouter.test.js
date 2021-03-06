import React from 'react';
import {mount} from 'enzyme';
import { AppRouter } from '../../../components/09-useContext/AppRouter';
import { UserContext } from '../../../components/09-useContext/UserContext';

describe('Pruebas en el componente', () => {
    const user = {
        id: 1,
        name: 'Jonathan'
    }
    const wrapper = mount(
        <UserContext.Provider value={{
            // user:user
            user
        }}>
            <AppRouter />
        </UserContext.Provider>
    );

    test('Debe mostrar el componente correctamente ', () => {
        expect(wrapper).toMatchSnapshot();
    });
    
})
