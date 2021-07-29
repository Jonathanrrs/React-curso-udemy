const express = require('express');
/* esto para las variables de entorno del proyecto de .env */
require('dotenv').config();
const cors = require('cors');
const { dbConnection } = require('./database/config');


/* crear server express */
const app = express();

/* Base de datos */
dbConnection();

/* Cors */
app.use(cors());

/* Directorio público */
/* Middleware, funcion que se ejecuta cuando alguein hace una peticion al servidor */
app.use(express.static('public'));

/* Lectura y parseo del body */
app.use(express.json());

/* rutas */
app.use('/api/auth', require('./routes/auth'));
app.use('/api/events', require('./routes/events'));

/* escuchar peticiones */

app.listen(process.env.PORT, () => {
    console.log(`servidor running en puerto ${process.env.PORT}`);
})