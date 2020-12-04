const personajes = ['goku', 'vegeta', 'jiren'];
const [, , p3] = personajes;
console.log(p3);

const retornaArreglo = () => {
    return ['ABC', 123];
}

const [letras, numeros] = retornaArreglo();
console.log(letras, numeros);

/* Actividad */

const usarEstado = (valor) => {
    return [valor, () =>{console.log('Hola mundo')}];
}

// const arr = usarEstado('Goku');
const [nombre, setNombre] = usarEstado('joni');
console.log(nombre);
setNombre();