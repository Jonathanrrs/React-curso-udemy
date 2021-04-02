import React from 'react';
import { mount } from 'enzyme';
import { HeroScreen } from '../../../components/heroes/HeroScreen';
import { MemoryRouter, Route } from 'react-router-dom';

describe('Pruebas en HeroScreen', () => {

    const history = {
        length: 10,
        push: jest.fn(),
        goBack: jest.fn()
    };


    test('Debe mostrar el component redirect si no hay argumentos en el URl ', () => {

        const wrapper = mount(
            <MemoryRouter initialEntries={['/hero']}>
                <HeroScreen history={history} />
            </MemoryRouter>
        );
        expect(wrapper.find('Redirect').exists()).toBe(true);

    });

    test('Debe mostrar un hero si el parámetro existe y se encuentra ', () => {

        const wrapper = mount(
            <MemoryRouter initialEntries={['/hero/marvel-spider']}>
                <Route path="/hero/:heroeId" component={HeroScreen}/>
            </MemoryRouter>
        );

        expect(wrapper.find('.row').exists()).toBe(true);

    });

    test('Debe regresar a la pantalla anterior con PUSH ', () => {

        const history = {
            length: 1,
            push: jest.fn(),
            goBack: jest.fn()
        };

        const wrapper = mount(
            <MemoryRouter initialEntries={['/hero/marvel-spider']}>
                <Route 
                    path="/hero/:heroeId" 
                    component={(props) => <HeroScreen history={history} />}
                />
            </MemoryRouter>
        );

        wrapper.find('button').prop('onClick')();

        expect(history.push).toHaveBeenCalledWith('/');
        expect(history.goBack).not.toHaveBeenCalledWith();
        
    });

    test('Debe regresar a la pantalla anterior ', () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={['/hero/marvel-spider']}>
                <Route 
                    path="/hero/:heroeId" 
                    component={(props) => <HeroScreen history={history} />}
                />
            </MemoryRouter>
        );

        wrapper.find('button').prop('onClick')();

        expect(history.goBack).toHaveBeenCalled();
        expect(history.push).not.toHaveBeenCalled();
    });

    test('Debe llamar el redirect si el hero no existe ', () => {
       
        const wrapper = mount(
            <MemoryRouter initialEntries={['/hero/marvel-spider12121']}>
                <Route 
                    path="/hero/:heroeId" 
                    component={(props) => <HeroScreen history={history} />}
                />
            </MemoryRouter>
        );

        expect(wrapper.text()).toBe('');
        
    });
    
    
    
    

});
