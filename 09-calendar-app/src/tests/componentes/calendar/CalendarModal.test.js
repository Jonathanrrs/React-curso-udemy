import { mount } from 'enzyme';
import React from 'react';
import { Provider } from 'react-redux';

import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import '@testing-library/jest-dom';
import moment from 'moment';
import { CalendarModal } from '../../../componentes/calendar/CalendarModal';
import { eventClearActiveEvent, eventStartUpdate } from '../../../actions/events';




jest.mock('../../../actions/events', () => ({
    eventStartUpdate: jest.fn(),
    eventClearActiveEvent: jest.fn(),
    
}));


const middlewares = [thunk];
const mockStore = configureStore(middlewares);

const now = moment().minutes(0).seconds(0).add(1, 'hours'); /* para que empieze en la hr siguiente */
const nowPlus1 = now.clone().add(1, 'hours');


const initState = {
    calendar: {
        events: [],
        activeEvent: {
            title: 'Hola mundo',
            notes: 'Algunas notas',
            start: now.toDate(),
            end: nowPlus1.toDate()
        }
    },
    auth: {
        uid: '1123',
        name: 'test'
    },
    ui: {
        modalOpen: true
    }
};

const store = mockStore(initState);

store.dispatch = jest.fn();

const wrapper = mount(
    <Provider store={store}>
        <CalendarModal />
    </Provider>
)
describe('Pruebas en CalendarModal', () => {

    beforeEach(() => {
        jest.clearAllMocks();
    })

    test('Debe mostrar el modal ', () => {

        expect(wrapper.find('Modal').prop('isOpen')).toBe(true);
    
    });

    test('Debe llamar la acción de actualizar y cerrar el modal', () => {
        
        wrapper.find('form').simulate('submit', {
            preventDefault(){}
        });

        expect(eventStartUpdate).toHaveBeenLastCalledWith(initState.calendar.activeEvent);
        expect(eventClearActiveEvent).toHaveBeenLastCalledWith();
    });
    
    test('Debe mostrar error si falta el título ', () => {
        
        wrapper.find('form').simulate('submit', {
            preventDefault(){}
        });
        expect(wrapper.find('input[name="title"]').hasClass('is-invalid')).toBe(true);
    });
    
    

});
