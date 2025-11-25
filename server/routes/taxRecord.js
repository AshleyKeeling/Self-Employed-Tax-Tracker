const express = require('express');
const requireAuth = require('../middleware/requireAuth');

// controller
const { getTaxRecord } = require('../controllers/taxRecordController');

const router = express.Router();

router.get('/:userID', requireAuth, getTaxRecord);

module.exports = router;