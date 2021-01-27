import React from 'react';
import {shallow} from 'enzyme';

import {HookApp} from '../HookApp';

describe('Comprobar el componente HookApp', () => {
    
    test('Debe mostrar el componente correctamente ', () => {
        
        const wrapper = shallow(<HookApp />);
        
        expect(wrapper).toMatchSnapshot();

    });
    

})
