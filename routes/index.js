const express = require('express');
const router = express.Router();
const chara = require('./chara');


router.use('/chara', chara)

module.exports = router;
