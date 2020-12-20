// import {heroes} from './data/heroes';
// import heroes, {owners} from '../data/heroes';
import heroes from '../data/heroes';



/* Actividad */
export const getHeroeById = (id) => {
    return heroes.find((heroe) => heroe.id === id);
}

export const getHeroeByOwner = (owner) => {
    return heroes.filter((heroes) => heroes.owner === owner)
};


