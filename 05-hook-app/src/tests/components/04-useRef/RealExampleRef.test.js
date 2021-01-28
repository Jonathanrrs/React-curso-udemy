import React from 'react';
import {shallow} from 'enzyme';
import { RealExampleRef } from '../../../components/04-useRef/RealExampleRef';

describe('Pruebas en el componente', () => {
    
    const wrapper = shallow(<RealExampleRef />);
    
    test('Debe mostrarse correctamente', () => {

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('MultipleCustomHooks').exists()).toBe(false);
    });
    
    test('Debe mostrar el componente <MultipleCustomHooks />', () => {
        
        wrapper.find('button').simulate('click');
        
        expect(wrapper.find('MultipleCustomHooks').exists()).toBe(true);
        
    });
    
    
})
