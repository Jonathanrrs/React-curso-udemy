import React from 'react';
import {shallow} from 'enzyme';
import { AddCategory } from '../../componentes/AddCategory';

describe('Pruebas en AddCategory', () => {
    
    const setCategories = jest.fn();
    let wrapper = shallow(<AddCategory setCategories={setCategories}/>);

    /* esto es usado para la prueba del submit, se debe limpiar */
    beforeEach(() => {
        jest.clearAllMocks(); /* por si tenemos una simulación esto se limpie */
        wrapper = shallow(<AddCategory setCategories={setCategories}/>);
    })

    
    test('Debe mostrarse correctamente ', () => {
        
        expect(wrapper).toMatchSnapshot();
    });

    test('Debe cambiar la caja de texto', () => {
        
        const input = wrapper.find('input');
        const value = 'Hola Mundo';
        input.simulate('change', {target: {value}});  /* simular evento del input */

        expect(wrapper.find('p').text().trim()).toBe(value);
    });

    test('No debe postear la información con submit', () => {
        
        wrapper.find('form').simulate('submit', {preventDefault(){}}); /* preventDefault: () => {} */
        
        expect(setCategories).not.toHaveBeenCalled();
    });
    
    test('deben llamar el setCategories y limpiar la caja de texto', () => {
        const value = 'Hola Mundo';
        wrapper.find('input').simulate('change', {target: {value}});
        wrapper.find('form').simulate('submit', {preventDefault(){}});
        expect(setCategories).toHaveBeenCalled();
        const inputVacio = wrapper.find('input').text();
        expect(inputVacio).toBe('');
        

    });
    
    

    
})
