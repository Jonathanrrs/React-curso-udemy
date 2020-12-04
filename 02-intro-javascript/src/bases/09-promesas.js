import {getHeroeById, getHeroeByOwner} from './bases/08-imp-exp';

// const promesa = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         /* Actividad */
//         const heroe = getHeroeById(2);
//         resolve(heroe); /* dentro se transfiere el valor a los then */
//         // reject('no se pudo encontrar el héroe')
//     }, 2000)
// });

// promesa.then((heroe) => {
//     console.log('heroe', heroe);
// })
// .catch(err => console.log(err));

const getHeroeByIdAsync = (id) => {
    return  new Promise((resolve, reject) => {
        setTimeout(() => {
            /* Actividad */
            const heroe = getHeroeById(id);
            if(heroe) {
                resolve(heroe);
            } else{
                reject('no se pudo encontrar el héroe');
            }
        }, 2000)
    });
}

getHeroeByIdAsync(2)
    .then(console.log)
    .catch(console.warn)
    // .then(heroe => console.log('Heroe', heroe))
    // .catch(err => console.warn(err))