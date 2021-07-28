const express = require('express');
const { dbConnection } = require('./database/config');
/* esto para las variables de entorno del proyecto de .env */
require('dotenv').config();


/* crear server express */
const app = express();

/* Base de datos */
dbConnection();


/* Directorio público */
/* Middleware, funcion que se ejecuta cuando alguein hace una peticion al servidor */
app.use(express.static('public'));

/* Lectura y parseo del body */
app.use(express.json());

/* rutas */
app.use('/api/auth', require('./routes/auth'));

/* escuchar peticiones */

app.listen(process.env.PORT, () => {
    console.log(`servidor running en puerto ${process.env.PORT}`);
})