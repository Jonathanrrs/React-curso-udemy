/* Desestructuración */
/* Asignación Desestructurante */

const persona = {
    nombre: 'Jonathan',
    edad: 20,
    clave: 'spiderman',
    // rango: 'Soldado'
};

// const {nombre: nombre2, edad,clave} = persona;
/* por si hay una variable con el mismo nombre */

// console.log(nombre2);
// console.log(edad);
// console.log(clave);

const usarContexto = ({nombre,edad, clave,  rango = 'Capitán'}) => { /* por si no lo tiene usa esa */
    // const {nombre, edad,clave} = usuario;
    // console.log(nombre,edad, rango);
    return {
        nombreClave: clave,
        anios: edad,
        latlng: {
            lat: 23.43434,
            lng: -23.3434
        }
    }
}

/* Actividad */
const {nombreClave, anios, latlng:{lat, lng}} = usarContexto(persona); /* extraer dentro de otro objeto */
console.log(nombreClave, anios);
console.log(lat, lng);
