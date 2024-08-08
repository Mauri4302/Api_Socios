const mongoose = require('mongoose');

const NumeroISOSchema = new mongoose.Schema({
  numero: String,
  auditor: { type: mongoose.Schema.Types.ObjectId, ref: 'Auditor' },
});

module.exports = mongoose.model('NumeroISO', NumeroISOSchema);