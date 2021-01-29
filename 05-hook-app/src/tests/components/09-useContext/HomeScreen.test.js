import React from 'react';
import {mount, /* shallow */} from 'enzyme';
import { HomeScreen } from '../../../components/09-useContext/HomeScreen';
import { UserContext } from '../../../components/09-useContext/UserContext';

describe('Pruebas en el componente', () => {
    const user = {
        name: 'Jonathan',
        email: 'jona@gmail.com'   
    }
    /* shallow renderiza solo el componente princiapal, por eso lo cambiamos por mount */
    const wrapper = mount( /* mount para renderizar todo en general */

        /* debemos crear el context */
        <UserContext.Provider value={{ /* doble llave porque utilizamos el contexto y estamos utilizando un objeto que tiene el user y setuser */
            user: user
        }}>
            <HomeScreen />
        </UserContext.Provider>
    );
    
    test('Debe mostrar el componente correctamente', () => {
        
        expect(wrapper).toMatchSnapshot();

    });
    
});
