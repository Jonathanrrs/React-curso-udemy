const express = require('express');
/* esto para las variables de entorno del proyecto de .env */
require('dotenv').config();


/* crear server express */
const app = express();

/* Directorio público */
/* Middleware, funcion que se ejecuta cuando alguein hace una peticion al servidor */
app.use(express.static('public'));

/* rutas */
app.use('/api/auth', require('./routes/auth'));

/* escuchar peticiones */

app.listen(process.env.PORT, () => {
    console.log(`servidor running en puerto ${process.env.PORT}`);
})