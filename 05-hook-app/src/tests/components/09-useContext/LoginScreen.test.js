import React from 'react';
import {mount} from 'enzyme';
import { LoginScreen } from '../../../components/09-useContext/LoginScreen';
import { UserContext } from '../../../components/09-useContext/UserContext';

describe('Pruebas en el componente', () => {
    const setUser = jest.fn();
    const wrapper = mount(
    <UserContext.Provider value={{
        setUser
    }}>
        <LoginScreen />
    </UserContext.Provider>

    );

    test('Debe mostrar el componente correctamente ', () => {
        expect(wrapper).toMatchSnapshot();
    });
   
    test('Debe ejecutar el setUser con el argumento esperado  ', () => {
    
        wrapper.find('button').prop('onClick')(); /* este es otra manera de simulación */

        expect(setUser).toHaveBeenCalledWith({
            id: 123,
            name: 'Ramiro'
           });
    });
    
});
