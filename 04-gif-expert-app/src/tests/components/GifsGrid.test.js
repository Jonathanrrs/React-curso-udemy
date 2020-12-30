import React from 'react';
import {shallow} from 'enzyme';
import { GifsGrid } from '../../componentes/GifsGrid';
import { useFetchGifs } from '../../hooks/useFetchGifs';

jest.mock('../../hooks/useFetchGifs');

describe('Probar el componente GifsGrid', () => {
    const category = 'Naruto';

    test('Debe mostrar el componente correctamente ', () => {
        useFetchGifs.mockReturnValue({
            data: [],
            loading: true
        });

        const wrapper = shallow(< GifsGrid category={category} />);
        
        expect(wrapper).toMatchSnapshot();

    });

    test('Debe mostrar items cuando se cargan imágenenes en useFetchGifs ', () => {
        /* debemos realizar un mock, que es como fingir algo que pasa */
        const gifs = [
            {
                id: 'Abc',
                url: 'https://localhost/cualquier/cosa.jpg',
                title: 'Cualquier cosa'
            }
        ]
        useFetchGifs.mockReturnValue({
            data: gifs,
            loading: false
        });
        const wrapper = shallow(< GifsGrid category={category} />);

        expect(wrapper).toMatchSnapshot();

    });
    
    
})
