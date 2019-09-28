const jwt = require ('jsonwebtoken')
const bcrypt = require ('bcrypt')
const modelUser = require('../model/modelSchema')
const auth = require ('../auth/authController')// Importando a senha do token e a data de expiração

//Autenticação JWT e verificação de email e senha
module.exports = {
  async sessionCreate(req, res) {
    const {email, password} = req.body
    //Vai no banco de dados e pegar o email e senha 
    const userPass  = await modelUser.findOne({email}).select("+password")
    //Usa o "userPass" para verificar se o usuário existe, se não existir da erro!
    if (!userPass) {
      return res.status(401).json('Você não tem cadastro!')
    }
    //Compara se a senha está correta, se não estiver da erro
    if(!await bcrypt.compare(password, userPass.password)){
      return res.status(401).json('Senha incorreta')
    }

    //Implementando JWT
    const {id, name} = userPass
    //Vai retornar o id e o nome do usuário
    return res.json({
      userPass:{
        id,//Retornar o id
        name,//Retorna o nome
      },
      //Aqui é gerado o token...Usa o id que é unico, e uma senha
      token: jwt.sign({ id }, auth.secret,{//senha secreta que está em outra pasta
        expiresIn: auth.expiresIn,//Data de expiração que está em outra pasta
      })
    })
  }
}