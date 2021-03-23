/* const mongoose = require('mongoose');

class Solicitud {
    requestID;
    requestDate;
    requesterName;
    petRequested;
    requestStatus;

    constructor(requestID, requestDate, requesterName, petRequested, requestStatus) {
        this.requestID                  = requestID;
        this.requestDate                = requestDate;
        this.requesterName              = requesterName;
        this.petRequested               = petRequested;
        this.requestStatus              = requestStatus;
    }
}

module.exports = Solicitud; */

const mongoose = require("mongoose");

var SolicitudSchema = new mongoose.Schema(
  {
    mascota: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "Mascota",
    },
    anunciante: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "Usuario",
    },
    solicitante: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "Usuario",
    },
    estado: { type: String, enum: ["aceptada", "cancelada", "pendiente"] },
  },
  { collection: "solicitudes", timestamps: true }
);

  SolicitudSchema.methods.publicData = function(){
  return {
     id: this.id,
     idMascota: this.idMascota,
     fechaCreacion: this.fechaCreacion,
     idAnunciante: this.idAnunciante,
     idSolicitante: this.idSolicitante,
     estado: this.estado
    };
  };
  
mongoose.model('Solicitud', SolicitudSchema)