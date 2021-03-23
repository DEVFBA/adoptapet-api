/*  Archivo controllers/mascotas.js
 *  Simulando la respuesta de objetos Mascota
 *  en un futuro aquí se utilizarán los modelos
 */

/* const Mascota = require('../models/Mascota')

function crearMascota(req, res) {
  // Instanciaremos una nueva mascota utilizando la clase Mascota
  var mascota = new Mascota(req.body)
  res.status(201).send(mascota)
}

function obtenerMascotas(req, res) {
  // Simulando dos mascotas y respondiendolas
  var mascota1 = new Mascota(1, 'Dora', 'Ángel', 'Dora', '7')
  var mascota2 = new Mascota(2, 'LAla', 'Dulce', 'Lala', '3')
  res.send([mascota1, mascota2])
}
*/


const mongoose = require('mongoose')
const Mascota = mongoose.model('Mascota')

function crearMascota(req, res, next) {
  var mascota = new Mascota(req.body)
  mascota.anunciante = req.usuario.id
  mascota.estado = 'disponible'
  mascota.save().then(mascota => {
    res.status(201).send(mascota)
  }).catch(next)
}

function obtenerMascotas(req, res, next) {
  if(req.params.id){
    Mascota.findById(req.params.id)
			.populate('anunciante', 'username nombre apellido bio foto').then(mascotas => {
	      res.send(mascotas)
	    }).catch(next)
  } else {
    Mascota.find().then(mascotas=>{
      res.send(mascotas)
    }).catch(next)
  }
}

function modificarMascota(req, res) {
  // simulando una mascota previamente existente que el usuario utili
  var mascota1 = new Mascota(req.params.id, 'Dora', 'Ángel', '7')
  var modificaciones = req.body
  mascota1 = { ...mascota1, ...modificaciones }
  res.send(mascota1)
}

function eliminarMascota(req, res) {
  res.status(200).send(`Mascota ${req.params.id} eliminada`);
}


module.exports = {
  crearMascota,
  obtenerMascotas,
  modificarMascota,
  eliminarMascota
}