import React from 'react';
import { /* shallow */ mount } from "enzyme";
import { PrivateRoute } from '../../routers/PrivateRoute';
import { MemoryRouter } from 'react-router-dom';

describe('Pruebas en PrivateRoute', () => {
   
    const props = {
        location: {
            pathname: '/marvel'
        }
    }

    /* para simular con jest el localstorage */
    Storage.prototype.setItem = jest.fn();

    test('Debe mostrar el componente si está autenticado y guardar en localstorage ', () => {
        
        const wrapper = mount(
        /* memoryRouter hihg order component para hacer pruebas de router con ciertas rutas, no se puede usar el shallow por esto porque solo renderiza el componente */
        <MemoryRouter>
            <PrivateRoute
                isAuthenticated={true}
                component={() => <span>Listo!</span>}
                {...props}  
            />
        </MemoryRouter>
        );
        /* redirect nos regresa un string vacio */
        expect(wrapper.find('span').exists()).toBe(true);
        /* setitem ahora es una función jest que se puede probar */
        expect(localStorage.setItem).toHaveBeenCalledWith('lastpath', '/marvel'); 

    });
    /* tarea */
    test('Debe bloquear el componente si no está auntenticado ', () => {
        const props = {
            location: {
                pathname: '/marvel'
            }
        }
       const wrapper = mount(
           <MemoryRouter>
               <PrivateRoute 
                isAuthenticated={false}
                component={() => <span>Hola mundo</span>}
                {...props}
               />
           </MemoryRouter>
       );
       
       expect(wrapper.find('span').exists()).toBe(false);
    });
    
    
});
