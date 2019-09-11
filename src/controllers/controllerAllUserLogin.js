const createUser = require ('../model/modelSchema')
const bcrypt = require ('bcrypt')

module.exports = {
  //Usa "create" para criar um usuários
  async register(req, res) {
    const body = req.body
    //Vai no banco de dados verificar se email já existe!
    const userExists = await createUser.exists({email: body.email}) 

    if(userExists){
      throw new Error('E-mail já existe!')
    }else{ 
    const passwordHash = await bcrypt.hash(body.password,10)
    body.password = passwordHash
    
    const user = await createUser.create(body)
    
    return res.send(user)
    }
  },
//Usa o find para mostrar todos os ussários cadastrados
  async all(req, res) {
    const allUser = await createUser.find()

    return res.json(allUser)
  },

}


