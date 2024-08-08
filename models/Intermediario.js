const mongoose = require('mongoose');

const IntermediarioSchema = new mongoose.Schema({
  nombreEmpresa: String,
  rucEmpresa: String,
  pais: String,
});

module.exports = mongoose.model('Intermediario', IntermediarioSchema);