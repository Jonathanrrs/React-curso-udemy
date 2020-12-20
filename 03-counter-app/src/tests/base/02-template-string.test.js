/* toBe */

import '@testing-library/jest-dom';

import {getSaludo} from '../../base-pruebas/02-template-string';

describe('Pruebas en 02-template-strings.js', () => {
    test('getSaludo debe de retornar hola Jonathan', () => {
        const nombre = 'Jonathan';
        const saludo = getSaludo(nombre);
        expect(saludo).toBe('Hola '+ nombre);
        
    })
    /* actividad */
    /* getSaludo debe retornar Hola Carlos si no hay argumento nombre */
    test('getSaludo debe retornar Hola Ramiro si no hay argumento nombre', () => {
        const saludo = getSaludo();
        expect(saludo).toBe('Hola Ramiro');
        
    })
})