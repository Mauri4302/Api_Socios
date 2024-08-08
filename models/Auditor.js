const mongoose = require('mongoose');

const AuditorSchema = new mongoose.Schema({
  iso: String,
  otro: String,
  paisIso: String,
  comentarios: String,
  archivoAdjunto: String,
  numerosIso: [{ type: mongoose.Schema.Types.ObjectId, ref: 'NumeroISO' }],
});

module.exports = mongoose.model('Auditor', AuditorSchema);