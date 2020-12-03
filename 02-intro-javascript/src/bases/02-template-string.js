const nombre = 'Jonathan';
const apellido = 'Ruiz';

// const nombreCompleto = nombre + ' ' + apellido;
const nombreCompleto = `${nombre} ${apellido}`;
console.log(nombreCompleto);

function getSaludo(nomre) {
    return 'Hola'+nombre;
}

console.log(`Este es un texto: ${getSaludo(nombre)}`);