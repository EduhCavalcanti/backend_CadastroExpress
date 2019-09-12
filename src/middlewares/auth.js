const jwt = require('jsonwebtoken')
const authConfig = require('../auth/authController')
const { promisify } = require ('util')//Vai ser usado para tratar o erro de forma diferente no token!
//Criando middleware que passa pela rota pra ser autenticado
module.exports = {
  async authControll(req, res, next) {
    //Pegando o header onde está o token
    const authHeader = req.headers.authorization
    //se não tiver nada no header
    if (!authHeader) {//Vai da esse erro
      return res.status(401).json('Token não aprovado ou não existente')
    }
    //vai separar o token do bearer que vem junto...Nunca vai ser usado o bearer
    const [bearer, token] = authHeader.split(' ')//Usa o split para separar os dois (bearer, token) e retorna em array

    try {
      const decoded = await promisify(jwt.verify)(token, authConfig.secret)//Vai veriicar se o token está correto!
      console.log(decoded)//O id do usuário e algumas outras informações vai está dentro da const "decoded" se estiver tudo certo com o token
      
      req.userId = decoded.id //Aqui vou passar o id do decoded para o req.userId. Pode ser acessado em outros métodos
      next()
    } catch (err) {
      return res.status(401).json('Token invalido')
    }
  }
}