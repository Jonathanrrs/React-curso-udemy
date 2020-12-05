const activo = true;

// let mensaje = '';

// if(!activo) {
//     mensaje = 'Activo';
// } else{
//     mensaje = 'Inactivo'
// }

// const mensaje = (activo) ? 'Activo' : 'Inactivo';
// const mensaje = (activo) ? 'Activo' : null;
const mensaje = activo && 'Activo'; /* si no se cumple no se hace nada, regresa false */

console.log(mensaje);