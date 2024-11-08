const express = require('express');
const router = express.Router();
const { createEyelashType, getEyelashTypes } = require('../controllers/eyelashTypeController');

router.post('/', createEyelashType);
router.get('/', getEyelashTypes);

module.exports = router;
