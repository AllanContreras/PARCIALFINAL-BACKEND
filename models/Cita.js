const mongoose = require('mongoose');

const citaSchema = new mongoose.Schema({
  nombreCompleto: String,
  cedula: String,
  correo: String,
  especialidad: String,
  doctor: String,
  ubicacion: String,
  fecha: String,
  estado: String // Confirmada, Rechazada, Cancelada
});

module.exports = mongoose.model('Cita', citaSchema);