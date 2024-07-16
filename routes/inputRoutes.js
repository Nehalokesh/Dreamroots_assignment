const express = require('express');
const { handleInput, getAllFiles } = require('../controller/inputController');

const router = express.Router();

router.post('/', handleInput);
router.get('/', getAllFiles);

module.exports = router;
