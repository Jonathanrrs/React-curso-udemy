// import {heroes} from './data/heroes';
import heroes, {owners} from '../data/heroes';
console.log(owners); /* exportación individual */





/* Actividad */
const getHeroeById = (id) => {
    return heroes.find((heroe) => heroe.id === id);
}

console.log(getHeroeById(2));

const getHeroeByOwner = (owner) => {
    return heroes.filter((heroes) => heroes.owner === owner)
};
console.log(getHeroeByOwner('Marvel'));