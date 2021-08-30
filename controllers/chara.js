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
  const result = await charaModel.findAll(); 
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

module.exports = {getAllChara, addChara}