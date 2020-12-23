import React from 'react';
import {shallow} from 'enzyme';
import { GifGridItem } from '../componentes/GifGridItem';

describe('Pruebas en GifGridItem', () => {
    
    test('Mostrar GifGridItem correctamente ', () => {
        
        const wrapper = shallow(<GifGridItem />);
        expect(wrapper).toMatchSnapshot();
    })
    
})
