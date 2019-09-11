const modelUser = require('../model/modelSchema')
const bcrypt = require('bcrypt')

module.exports = {
  async login(req, res) {
    const body = req.body

    const userEmail = await modelUser.exists({ email: body.email })
    if (!userEmail) {
      throw res.status(404).json('Você não tem cadastro!')
    }
    return res.json('Logado!')
  }
}