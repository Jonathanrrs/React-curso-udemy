import React from 'react';
import {shallow} from 'enzyme';
import { TodoListItem } from '../../../components/08-useReducer/TodoListItem';
import { demoTodos } from '../../fuxtures/demoTodos';



describe('Pruebas en el componente', () => {
    
    const index = 0;
    const handleDelete = jest.fn();
    const handleToggle = jest.fn();

    const wrapper = shallow(<TodoListItem 
        todo={demoTodos[0]}
        index={index}
        handleDelete={handleDelete}
        handleToggle={handleToggle}
    />)
    // console.log(demoTodos[0]);

    test('Debe mostrarse correctamente ', () => {
        
        expect(wrapper).toMatchSnapshot();
    });

    test('Debe llamar la función handleToggle ', () => {

        wrapper.find('button').simulate('click');
        expect(handleDelete).toHaveBeenCalledWith(demoTodos[0].id);
    });
    
    test('Debe llamar la función handleToggle ', () => {
        wrapper.find('p').simulate('click');
        expect(handleToggle).toHaveBeenCalledWith(demoTodos[0].id);
        
    });
    
    test('Debe mostrar el texto correctamente ', () => {
       expect(wrapper.find('p').text()).toBe(`${index+1}. ${demoTodos[0].desc}`)
    });
    
    test('Debe tener la clase complete si elk TODO.done == true ', () => {

        const todo = demoTodos[0];
        todo.done = true;

        const wrapper = shallow(<TodoListItem 
            todo={demoTodos[0]}
        />)

        expect(wrapper.find('p').hasClass('complete')).toBe(true);
        
    });
    
    
})
