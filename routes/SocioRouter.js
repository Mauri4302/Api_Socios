const express = require('express');
const router = express.Router();
const socioController = require('../controllers/socioController');

router.get('/', socioController.getSocios);
router.post('/', socioController.createSocio);

module.exports = router;