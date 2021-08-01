import { mount } from 'enzyme';
import React from 'react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import '@testing-library/jest-dom';
import { LoginScreen } from '../../../componentes/auth/LoginScreen';
import { startLogin } from '../../../actions/auth';



jest.mock('../../../actions/auth', () => ({
    startLogin: jest.fn()
}));

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

const initState = {};
const store = mockStore(initState);
store.dispatch = jest.fn();

const wrapper = mount(
    <Provider store={store}>
        <LoginScreen />
    </Provider>
)

describe('Pruebas en loginScreen', () => {
    
    test('Debe mostrarse correctamente ', () => {
        
        expect(wrapper).toMatchSnapshot();
    });

    test('Debe llamar el dispatch del login', () => {
       
        wrapper.find('input[name="lEmail"]').simulate('change', {
            target: {
                name: 'lEmail',
                value: 'jona@gmail.com'
            }
        });

        wrapper.find('input[name="lPassword"]').simulate('change', {
            target: {
                name: 'lPassword',
                value: '123456'
            }
        });

        wrapper.find('form').at(0).prop('onSubmit')({
            preventDefault(){}
        });

        expect(startLogin).toHaveBeenLastCalledWith('jona@gmail.com', '123456');

        
    });
    
    
})
