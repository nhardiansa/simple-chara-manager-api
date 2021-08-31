const express = require('express');
const router = express.Router();
const {
  getAllChara, getCharaById, addChara, updateChara, deleteCharaById
} = require('../controllers/chara');


router.get('/', getAllChara);
router.get('/:id', getCharaById);
router.post('/', addChara);
router.put('/:id', updateChara);
router.delete('/:id', deleteCharaById);

module.exports = router;
