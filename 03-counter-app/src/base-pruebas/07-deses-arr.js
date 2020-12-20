const personajes = ['goku', 'vegeta', 'jiren'];
const [, , p3] = personajes;


export const retornaArreglo = () => {
    return ['ABC', 123];
}

// const [letras, numeros] = retornaArreglo();


/* Actividad */

const usarEstado = (valor) => {
    return [valor, () =>{console.log('Hola mundo')}];
}

