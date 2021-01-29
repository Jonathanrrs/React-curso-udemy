import React from 'react';
import {shallow} from 'enzyme';
import { TodoList } from '../../../components/08-useReducer/TodoList';
import { demoTodos } from '../../fuxtures/demoTodos';

describe('Pruebas en el componente', () => {
   
    const handleDelete = jest.fn();
    const handleToggle = jest.fn();
   
    const wrapper = shallow(<TodoList 
        todos = {demoTodos}
        handleDelete ={handleDelete}
        handleToggle ={handleToggle}
    />)
    
    test('Debe mostrarse correctamente ', () => {

        expect(wrapper).toMatchSnapshot();

    });

    test('Debe tener dos TodoListItem ', () => {
       
        expect(wrapper.find('TodoListItem').length).toBe(demoTodos.length);
        /* se espera cualquier funcion, debe ser con toEqual porque con el tobe se intenta comparar con el valor de equidad 2 objetos diferentes, aunque sea igual como son objetos apuntan a espacios diferentes de memoria */
        expect(wrapper.find('TodoListItem').at(0).props('handleDelete')).toEqual(expect.any(Function));
    });
    
    
})
