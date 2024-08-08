const Socio = require('../models/Socio');

exports.getSocios = async (req, res) => {
  try {
    const socios = await Socio.find();
    res.json(socios);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.createSocio = async (req, res) => {
  const socio = new Socio(req.body);
  try {
    const newSocio = await socio.save();
    res.status(201).json(newSocio);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};