import { getHeroeById, getHeroeByOwner } from '../../base-pruebas/08-imp-exp';
import heroes from '../../data/heroes';

describe('Pruebas en funciones de Héroes', () => {

    test('Debe retornar un heroe por ID', () => {
        const id =  1;
        const heroe = getHeroeById(id);
        
        const heroeData = heroes.find(h => h.id === id);
        expect(heroe).toEqual(heroeData);
    });

    test('Debe retornar undefines si heróe no existe', () => {
        const id =  10;
        const heroe = getHeroeById(id);
        /* undefines es primitivo */
        expect(heroe).toBe(undefined);
    });

    /* Actividad */
    test('Debe de retornar un arreglo con los héroes de DC', () => {
        const owner = 'DC';
        const heroe = getHeroeByOwner(owner);
        const heroesData = heroes.filter(h => h.owner === owner);
        expect(heroe).toEqual(heroesData);
    });

    test('Deben de retornar un arreglo con los héroes de Marvel', () => {
        const owner = 'Marvel';
      
        const heroesData = heroes.filter(h => h.owner === owner);
        const heroesLength = heroesData.length;
        expect(heroesLength).toBe(2);

    });
})