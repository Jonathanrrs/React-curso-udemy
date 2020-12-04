/* Funciones en JS */

// const saludar = function(nombre) {
//     return `Hola, ${nombre}`;
// }

// saludar = 20;
/* ya no funciona por la manera de trabajar las funciones como constantes */
// console.log(saludar('Jonathan'));

const saludar2 = (nombre) => {
    return `Hola, ${nombre}`;
}
const saludar3 = (nombre) => `Hola, ${nombre}`;
const saludar4 = () => `Hola mundo`;

console.log(saludar2('Ramiro'));
console.log(saludar3('Cr7'));
console.log(saludar4());

// const getUser = () => {
//     return {
//         uid: 'ABC1212',
//         username: 'Hola_mundo'
//     }
// }
/* otra manera de hacerlo */
const getUser = () => ({
        uid: 'ABC1212',
        username: 'Hola_mundo'
    });


console.log(getUser());

// function getUsuarioActivo (nombre) {
//     return {
//         uid: 'ABC1323',
//         nombre: nombre
//     }
// };

/* Actividad */
const getUsuarioActivo = (nombre) => ({
    uid: 'ABC1323',
    nombre: nombre
});

const usuarioActivo = getUsuarioActivo('Jonathan');
console.log(usuarioActivo);
