const charaModel = require('../models').chara


const getAllChara = async (req, res) => {
  try {
    const result = await charaModel.findAll()
    res.json({
      status: 'success',
      data: result
    })
  } catch (err) {
    res.json({
      status: 'error',
      messages: err.message
    })
    console.error(err)
  }
}

const getCharaById = async (req, res) => {
  try {
    const charaId = req.params.id
    const result = await charaModel.findOne({ where: {id: charaId } })
    res.json({
      status: 'success',
      data: result
    })
  } catch (err) {
    res.json({
      status: 'error',
      messages: err.message
    })
    console.error(err)
  }
}

const addChara = (req, res) => {
  const {name, email} = req.body
  charaModel.create({name, email})
    .then(result => {
      res.status(201)
      res.json({
        status: 'success add a chara',
        data: result
      })
    })
    .catch(err => {
      res.status(400)
      res.json({
        status: 'error',
        message: err.message
      })
    })
}

const updateChara = (req, res) => {
  const charaId = req.params.id
  const {name, email} = req.body
  charaModel.update({name, email}, { where: { id: charaId}})
    .then(result => {
      res.status(200)
      res.json({
        status: 'success update chara',
        data: result
      })
    })
    .catch(err => {
      res.status(400)
      res.json({
        status: 'error',
        message: err.message
      })
    })
}

const deleteCharaById = (req, res) => {
  const id = req.params.id
  charaModel.destroy({ where: {id} })
    .then(result => {
      res.status(200)
      res.json({
        status: 'success delete chara',
        data: result
      })
    })
    .catch(err => {
      res.status(404)
      res.json({
        status: 'error',
        message: err.message
      })
    })
}

module.exports = {getAllChara, getCharaById, addChara, updateChara, deleteCharaById}