const mongoose = require('mongoose');

const especialidadSchema = new mongoose.Schema({
  nombre: String,
  descripcion: String,
  doctor: String,
  ubicacion: String,
  imagenURL: String
});

module.exports = mongoose.model('Especialidad', especialidadSchema);