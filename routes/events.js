/* 
    Rutas de Eventos / Events
    host + /api/events
 */

const { Router } = require('express');
const { validarJWT } = require('../middlewares/validar-jwt');

const { check } = require('express-validator');
const { validarCampos } = require('../middlewares/validar-campos');

const {isDate} = require('../helpers/isDate');

const {
    obtenerEventos,
    crearEvento,
    actualizarEvento,
    eliminarEvento
} = require('../controllers/events');

const router = Router();

//Todas tienen que pasar por la validacion de JWT
router.use(validarJWT);

//Obtener eventos
router.get('/', obtenerEventos);

//Crear un nuevo evento
router.post(
    '/',
    [
        check('title', 'El titulo es obligatorio').not().isEmpty(),
        check('start', 'La fecha de inicio es obligatoria').custom(isDate),
        check('end', 'La fecha de fin es obligatoria').custom(isDate),
        validarCampos
    ]
    ,
    crearEvento);

//Actualizar evento
router.put('/:id', actualizarEvento);

//Actualizar evento
router.delete('/:id', eliminarEvento);

module.exports = router;