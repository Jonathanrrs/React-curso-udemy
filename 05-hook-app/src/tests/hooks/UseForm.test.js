import React from 'react';
import { renderHook, act } from '@testing-library/react-hooks';
import { UseForm } from '../../hooks/UseForm';


describe('Pruebas en el componente', () => {
    const initialForm = {
        name: 'Jonathan',
        email: 'jona@gmail.com'
    };


    test('Debe regresar un formulario por defecto ', () => {
        const {result} = renderHook(() => UseForm(initialForm));
       
        const [values,handleInputChange, reset] = result.current;

        expect(values).toEqual(initialForm);
        expect(typeof handleInputChange).toBe('function');
        expect(typeof reset).toBe('function');
      
    });

    test('Debe cambiar el valor del formulario (cambiar name)', () => {
        const {result} = renderHook(() => UseForm(initialForm));
        const [ , handleInputChange] = result.current;
    
        act(() => {
            handleInputChange({
                target: {
                    name: 'name',
                    value: 'Ramiro'
                }
            })
        });

        const [values] = result.current;
        expect(values).toEqual({...initialForm, name: 'Ramiro'});
    });

    test('Debe re-establecer el formulario con reset ', () => {
        const {result} = renderHook(() => UseForm(initialForm));
        const [ , handleInputChange, reset] = result.current;
    
        act(() => {
            handleInputChange({
                target: {
                    name: 'name',
                    value: 'Ramiro'
                }
            });
            reset();
        });

        const [values] = result.current;
        expect(values).toEqual(initialForm);
    });
    
    
    
})
