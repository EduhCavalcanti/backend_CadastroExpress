const createUser = require ('../model/modelSchema')
const bcrypt = require ('bcrypt')

module.exports = {
  //Usa "create" para criar um usuários
  async register(req, res) {
    //Simplifica req.body
    const body = req.body
    
    //Vai no banco de dados verificar se email já existe!
    const userExists = await createUser.exists({email: body.email}) 
    if(userExists){
      throw res.status(401).json('E-mail já cadastrado!')
      //Verifica se foi digitado um nome
    }if(!body.name){
      throw res.status(404).json('Nome obrigatorio!')
      //Verifica se foi digitado uma senha
    }if(!body.password){
      throw res.status(404).json('Senha Obrigatoria!')
    }

    //Encriptação de senha 
    const passwordHash = await bcrypt.hash(body.password,10)
    body.password = passwordHash
    //Criação de usuário
    const user = await createUser.create(body)
    
    return res.send(user)

  },
//Usa o find para mostrar todos os ussários cadastrados
  async all(req, res) {
    const allUser = await createUser.find()
    //Retorna todos os usuários
    return res.json(allUser)
  },

}


