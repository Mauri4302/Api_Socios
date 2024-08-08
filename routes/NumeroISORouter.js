const express = require('express');
const router = express.Router();
const numeroISOController = require('../controllers/numeroISOController');

router.get('/', numeroISOController.getNumerosISO);
router.post('/', numeroISOController.createNumeroISO);

module.exports = router;