const mongoose = require('mongoose');

const SocioSchema = new mongoose.Schema({
  nombre: String,
  apellidoPaterno: String,
  apellidoMaterno: String,
  pais: String,
  numeroCelular: String,
  numeroCuenta: String,
  correoElectronico: String,
  contraseña: String,
  nombreBanco: String,
});

module.exports = mongoose.model('Socio', SocioSchema);