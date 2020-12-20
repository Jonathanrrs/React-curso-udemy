import React from 'react';
import { render } from '@testing-library/react';
import PrimeraApp from '../PrimeraApp';

describe('Pruebas en PrimeraAPP', () => {

    test('Demostrar el mensaje "Hola, soy gokú', () => {
        const saludo = 'Hola, soy Gokú';

        const {getByText} = render( <PrimeraApp saludo={saludo} />);

        expect(getByText(saludo)).toBeInTheDocument();
    }) 
})