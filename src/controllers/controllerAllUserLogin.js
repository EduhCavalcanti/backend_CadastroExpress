const userModel = require('../model/modelSchema')

module.exports = {
  //Usa "create" para criar um usuários
  async resgiter(req, res) {
    const user = await userModel.create(req.body)

    return res.json(user)
  },
//Usa o find para mostrar todos os ussários cadastrados
  async all(req, res) {
    const allUser = await userModel.find()

    return res.json(allUser)
  }

}


