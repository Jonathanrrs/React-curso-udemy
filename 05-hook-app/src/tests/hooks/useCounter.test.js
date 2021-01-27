import React from 'react';
import {renderHook} from '@testing-library/react-hooks';
import { useCounter } from '../../hooks/useCounter';


describe('Pruebas en el componente', () => {
    /* no debe mostrar un match con snapshot porque no hay nada que mostrar en pantalla */

    test('Debe retornar valores por defecto', () => {
        
        const {result} = renderHook(() => useCounter());

        expect(result.current.counter).toBe(10);
        expect(typeof result.current.increment).toBe('function');
        expect(typeof result.current.decrement).toBe('function');
        expect(typeof result.current.reset).toBe('function');
    })
    

})
