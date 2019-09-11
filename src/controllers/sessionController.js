const modelUser = require('../model/modelSchema')
const bcrypt = require('bcrypt')

//Autenticação JWT
module.exports = {
  async sessionCreate(req, res) {
    const {email, password} = req.body

    const userEmail = await modelUser.exists({ email })
    if (!userEmail) {
      throw res.status(400).json('Você não tem cadastro!')
    }
    return res.json('Logado')
  }
}