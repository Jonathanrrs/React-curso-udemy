import React from 'react';
import {shallow} from 'enzyme';
import { AddCategory } from '../../componentes/AddCategory';

describe('Pruebas en AddCategory', () => {
    
    const setCategories = () => {};
    const wrapper = shallow(<AddCategory setCategories={setCategories}/>);
    
    test('Debe mostrarse correctamente ', () => {
        
        expect(wrapper).toMatchSnapshot();
    });

    test('Debe cambiar la caja de texto', () => {
        
        const input = wrapper.find('input');
        const value = 'Hola Mundo';
        input.simulate('change', {target: {value}});  /* simular evento del input */

        expect(wrapper.find('p').text().trim()).toBe(value);


    })
    

    
})
