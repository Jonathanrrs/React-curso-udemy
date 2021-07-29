/* 
    event routes
    /api/events
 */
const express = require('express');
const router = express.Router();

const { getEventos, crearEvento, actualizarEvento, eliminarEvento } = require('../controllers/events');
const { validarJWT } = require('../middlewares/validar-jwt');

/* hasta arriba para que todas estén protegidas */
router.use(validarJWT);

/* obtener eventos */
router.get('/', getEventos);

/* crear un nuevo evento */
router.post('/', crearEvento);

/* actualizar evento */
router.put('/:id', actualizarEvento);

/* borrar evento */
router.delete('/:id', eliminarEvento);

module.exports = router;
