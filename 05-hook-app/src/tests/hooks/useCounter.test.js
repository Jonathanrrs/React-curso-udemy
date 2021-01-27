import React from 'react';
import {renderHook, act} from '@testing-library/react-hooks';
import { useCounter } from '../../hooks/useCounter';


describe('Pruebas en el componente', () => {
    /* no debe mostrar un match con snapshot porque no hay nada que mostrar en pantalla */

    test('Debe retornar valores por defecto', () => {
        
        const {result} = renderHook(() => useCounter());

        expect(result.current.counter).toBe(10);
        expect(typeof result.current.increment).toBe('function');
        expect(typeof result.current.decrement).toBe('function');
        expect(typeof result.current.reset).toBe('function');
    });

    test('Debe de tener el counter en 100', () => {
        
        const {result} = renderHook(() => useCounter(100));

        expect(result.current.counter).toBe(100);
        
    });

    test('Debe incrementar el counter en 1 ', () => {
        
        const {result} = renderHook(() => useCounter(100));
        const {increment} = result.current;

        act(() => {
            increment();
        });

        const {counter} = result.current;
        expect(counter).toBe(101);

    });

    test('Debe decrementar el counter en 1 ', () => {
        
        const {result} = renderHook(() => useCounter(100));
        const {decrement} = result.current;
        act(() => {
            decrement();
        });

        const {counter} = result.current;
        expect(counter).toBe(99)
    });
    
    test('Debe resetear el counter al valor inicial', () => {
        
        const {result} = renderHook(() => useCounter(100));
        const {increment,reset} = result.current;
        act(() => {
            increment();
            reset();
        });

        const {counter} = result.current;
        expect(counter).toBe(100);
    })
    
    
    
    


})
