import React from 'react';
import { mount } from "enzyme";
import { LoginScreen } from "../../../components/auth/LoginScreen";
import { Provider } from 'react-redux';

import configureStore from 'redux-mock-store'; 
import thunk from 'redux-thunk';

import {MemoryRouter} from 'react-router-dom'

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

const initState = {
    auth: {},
    ui: {
        loading: false,
        msgError: null
    }
};

let store = mockStore(initState);

const wrapper = mount(
    <Provider store={store}>
        <MemoryRouter>
            <LoginScreen />
        </MemoryRouter>
    </Provider>
)

describe('Pruebas en LoginScreen', () => {
    
    beforeEach(() => {
        store = mockStore(initState);
    });

    test('Debe mostrarse correctamente ', () => {
        expect(wrapper).toMatchSnapshot(); 
    });
    

   

});
