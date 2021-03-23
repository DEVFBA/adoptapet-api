var router = require('express').Router();

router.get('/', (req, res)=>{
  res.send('welcome to Hola Mundo');
});

router.use('/usuarios', require('./usuarios'));
router.use('/mascotas', require('./mascotas'));
router.use('/solicitudes', require('./solicitudes'));

module.exports = router;