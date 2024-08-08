const express = require('express');
const router = express.Router();
const intermediarioController = require('../controllers/intermediarioController');

router.get('/', intermediarioController.getIntermediarios);
router.post('/', intermediarioController.createIntermediario);

module.exports = router;