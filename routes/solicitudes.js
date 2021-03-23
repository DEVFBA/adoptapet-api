// Estructura del CRUD
/* const router = require('express').Router();
const {
  crearSolicitud,
  obtenerSolicitudes,
  modificarSolicitud,
  eliminarSolicitud
} = require('../controllers/solicitudes')

router.get('/', obtenerSolicitudes)
router.post('/', crearSolicitud)
router.put('/:id', modificarSolicitud)
router.delete('/:id', eliminarSolicitud)

module.exports = router; */

const router = require('express').Router();
const {
  crearSolicitud,
  obtenerSolicitud,
  modificarSolicitud,
  eliminarSolicitud,
  obtenerSolicitudes
} = require('../controllers/solicitudes')
var auth = require('./auth');

router.get('/', auth.requerido, obtenerSolicitud)
router.get('/:id', auth.requerido, obtenerSolicitud)
router.post('/', auth.requerido, crearSolicitud)
router.put('/:id', auth.requerido, modificarSolicitud)
router.delete('/:id', auth.requerido, eliminarSolicitud)

module.exports = router;