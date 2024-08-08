const NumeroISO = require('../models/NumeroISO');
const Auditor = require('../models/Auditor');

exports.getNumerosISO = async (req, res) => {
  try {
    const numerosISO = await NumeroISO.find().populate('auditor');
    res.json(numerosISO);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.createNumeroISO = async (req, res) => {
  const { auditorId, numero } = req.body;
  const numeroISO = new NumeroISO({ numero, auditor: auditorId });

  try {
    const newNumeroISO = await numeroISO.save();
    const auditor = await Auditor.findById(auditorId);
    auditor.numerosIso.push(newNumeroISO);
    await auditor.save();
    res.status(201).json(newNumeroISO);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};