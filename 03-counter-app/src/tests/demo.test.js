/* para correrlo npm run test */

describe('Pruebas en el archivo demo.test.js', () => {
    test('debe ser iguales los string', () => {
     
        /* 1. Inicialización */
        const mensaje = 'Hola mundo';
        /* 2. estimulo */
        const mensaje2 = `Hola mundo`;
        /* 3. Observar el comportamiento */
        expect(mensaje).toBe(mensaje2); /* === */
    
    })
})
