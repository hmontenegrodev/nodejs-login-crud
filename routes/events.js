/* 
    Rutas de Eventos / Events
    host + /api/events
 */

const { Router } = require('express');
//const { check } = require('express-validator');
//const { validarCampos } = require('../middlewares/validar-campos');

const { obtenerEventos,
    crearEvento,
    actualizarEvento,
    eliminarEvento
} = require('../controllers/events');

const router = Router();

//Obtener eventos
router.get('/', obtenerEventos);

//Crear un nuevo evento
router.post('/', crearEvento);

//Actualizar evento
router.put('/:id', actualizarEvento);

//Actualizar evento
router.delete('/:id', eliminarEvento);

module.exports = router;