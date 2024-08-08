const Intermediario = require('../models/Intermediario');

exports.getIntermediarios = async (req, res) => {
  try {
    const intermediarios = await Intermediario.find();
    res.json(intermediarios);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.createIntermediario = async (req, res) => {
  const intermediario = new Intermediario(req.body);
  try {
    const newIntermediario = await intermediario.save();
    res.status(201).json(newIntermediario);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};