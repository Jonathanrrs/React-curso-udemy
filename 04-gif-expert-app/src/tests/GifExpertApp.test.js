import React from 'react';
import {shallow} from 'enzyme';
import { GifExpertApp } from '../GifExpertApp';


describe('Comprobar el componente GifExpertApp', () => {
    

    test('Debe mostrar el componente correctamente ', () => {
        const wrapper = shallow(<GifExpertApp />);

        expect(wrapper).toMatchSnapshot();
    });

    test('Debe mostrar una lista de categorias', () => {
        const categories = ['Naruto', 'Dragon ball'];

        const wrapper = shallow(<GifExpertApp defaultCategories={categories}/>);

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('GifsGrid').length).toBe(categories.length);

    })
    

})
