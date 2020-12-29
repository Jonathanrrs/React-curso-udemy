import React from 'react';
import {shallow} from 'enzyme';
import { AddCategory } from '../../componentes/AddCategory';

describe('Pruebas en AddCategory', () => {
    
    const setCategories = () => {};
    test('Debe mostrarse correctamente ', () => {
        
        const wrapper = shallow(<AddCategory setCategories={setCategories}/>);
        expect(wrapper).toMatchSnapshot();
    })
    
})
