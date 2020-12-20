
const saludar2 = (nombre) => {
    return `Hola, ${nombre}`;
}
const saludar3 = (nombre) => `Hola, ${nombre}`;
const saludar4 = () => `Hola mundo`;

export const getUser = () => ({
    uid: 'ABC1212',
    username: 'Hola_mundo'
});

/* Actividad */
export const getUsuarioActivo = (nombre) => ({
    uid: 'ABC1323',
    nombre: nombre
});

