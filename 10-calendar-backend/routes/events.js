/* 
    event routes
    /api/events
 */
const express = require('express');
const router = express.Router();
const {check} = require('express-validator');
const { validarCampos } = require('../middlewares/validar-campos');
const { isDate } = require('../helpers/isDate');
const { getEventos, crearEvento, actualizarEvento, eliminarEvento } = require('../controllers/events');
const { validarJWT } = require('../middlewares/validar-jwt');

/* hasta arriba para que todas estén protegidas */
router.use(validarJWT);

/* obtener eventos */
router.get('/', getEventos);

/* crear un nuevo evento */
router.post(
    '/', 
    [
        check('title', 'El titulo es obligatorio').not().isEmpty(),
        check('start', 'Fecha de inicio es obligatoria').custom(isDate),
        check('end', 'Fecha de finalización es obligatoria').custom(isDate),
        validarCampos
    ],
    crearEvento);

/* actualizar evento */
router.put(
    '/:id', 
    [
        check('title', 'El titulo es obligatorio').not().isEmpty(),
        check('start', 'Fecha de inicio es obligatoria').custom(isDate),
        check('end', 'Fecha de finalización es obligatoria').custom(isDate),
        validarCampos
    ]
    ,actualizarEvento);

/* borrar evento */
router.delete('/:id', eliminarEvento);

module.exports = router;
