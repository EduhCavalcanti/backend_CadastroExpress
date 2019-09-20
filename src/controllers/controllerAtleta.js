const yup = require ('yup') //Usando o yup pra validar dados de entrada 
const createAtlets = require('../model/atletaSchema')

module.exports = {
  async store(req, res) {
    const { nome } = req.body
    const atletsExist = await createAtlets.exists({ nome })

    if (atletsExist) {
      return res.json('Atleta já existe')
    }


    const atlets = await createAtlets.create(req.body)
    return res.json(atlets)
  },

  async all(req, res) {
    const atletsAll = await createAtlets.find()
    return res.json(atletsAll)
  }
}