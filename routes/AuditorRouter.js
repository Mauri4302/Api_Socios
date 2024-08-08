const express = require('express');
const router = express.Router();
const auditorController = require('../controllers/auditorController');

router.get('/', auditorController.getAuditores);
router.post('/', auditorController.createAuditor);

module.exports = router;