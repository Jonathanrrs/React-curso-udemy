/* toEqual */

import '@testing-library/jest-dom';
import { getUser } from '../../base-pruebas/05-funciones'
import { getUsuarioActivo } from '../../base-pruebas/05-funciones'

describe('Pruebas en 05-funciones', () => {
    test('getUser debe retornar un objeto', () => {
        const userTest = {
            uid: 'ABC1212',
            username: 'Hola_mundo'
        }

        const user = getUser();
        expect(user).toEqual(userTest);
    })

    /* Actividad */
    /* getUsuarioActivo debe de retonar un objeto */
    test('getUsuarioActivo debe de retonar un objeto', () => {
        const nombre = 'Jonathan';
        const usuarioActivoTest = {
            uid: 'ABC1323',
            nombre: nombre
        }
        const usuarioActivo = getUsuarioActivo(nombre);
        expect(usuarioActivo).toEqual(usuarioActivoTest);
    })
})