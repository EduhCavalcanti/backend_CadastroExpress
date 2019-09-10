const createUser = require ('../model/modelSchema')


module.exports = {
  //Usa "create" para criar um usuários
  async register(req, res) {
    const user = await createUser.create(req.body)
    
    return res.send(user)
    
  },
//Usa o find para mostrar todos os ussários cadastrados
  async all(req, res) {
    const allUser = await userModel.find()

    return res.json(allUser)
  }

}


