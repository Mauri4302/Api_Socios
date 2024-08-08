const Auditor = require('../models/Auditor');

exports.getAuditores = async (req, res) => {
  try {
    const auditores = await Auditor.find().populate('numerosIso');
    res.json(auditores);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.createAuditor = async (req, res) => {
  const auditor = new Auditor(req.body);
  try {
    const newAuditor = await auditor.save();
    res.status(201).json(newAuditor);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};