const persona = {
    nombre: 'Joni',
    apellido: 'Ruiz',
    edad: 20,
    direccion: {
        ciudad: 'México',
        zip: 423232,
        lat: 7675.232,
        lng: 23.67767
    }
};

// console.table(persona);
// console.log(persona);

const persona2 = persona;
persona2.nombre = 'Ramiro';
/* falso positivo, por la copia de la referencia */
console.log(persona);
console.log(persona2);

const persona3 = {...persona}; /* clon del objeto */