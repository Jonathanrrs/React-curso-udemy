import React from 'react';
import {mount, shallow} from 'enzyme';
import { TodoApp } from '../../../components/08-useReducer/TodoApp';
import { demoTodos } from '../../fuxtures/demoTodos';
import {act} from '@testing-library/react';

describe('Pruebas en el componente', () => {
    
    const wrapper = shallow(<TodoApp />);

/* ya viene propio en las pruebas, esto para ejecutar el localstorage  */
    Storage.prototype.setItem = jest.fn(()=> {});


    test('Debe mostrarse correctamente', () => {
        
        expect(wrapper).toMatchSnapshot();
    });
    

    test('Debe agregar un TODO ', () => {
        /* mount usarlo para probar toda la app en contexto, en general */
        const wrapper = mount(<TodoApp />);
        /* ocupamos el act para manejar el cambio directamente */
        act(() => {
            wrapper.find('TodoAdd').prop('handleAddTodo')(demoTodos[0]);
            wrapper.find('TodoAdd').prop('handleAddTodo')(demoTodos[1]);
        });
        
        expect(wrapper.find('h1').text().trim()).toBe('TodoApp (2)');
        expect(localStorage.setItem).toHaveBeenCalledTimes(2);
    });

    test('Debe borrar un todo', () => {
        
        wrapper.find('TodoAdd').prop('handleAddTodo')(demoTodos[0]);
        wrapper.find('TodoList').prop('handleDelete')(demoTodos[0].id);
        expect(wrapper.find('h1').text().trim()).toBe('TodoApp (0)');
        
    });
    
    

});
