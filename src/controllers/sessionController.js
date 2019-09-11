const jwt = require ('jsonwebtoken')
const bcrypt = require ('bcrypt')
const modelUser = require('../model/modelSchema')

//Autenticação JWT
module.exports = {
  async sessionCreate(req, res) {
    const {email, password} = req.body

    const userEmail = await modelUser.exists({ email })
    if (!userEmail) {
      throw res.status(400).json('Você não tem cadastro!')
    }

    const userPass  = await modelUser.findOne({email}).select("+password")
    if(!await bcrypt.compare(password, userPass.password)){
      throw res.json('Senha incorreta')
    }
  
    return res.json('Logado')
  }
}