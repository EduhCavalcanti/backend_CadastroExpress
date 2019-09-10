const userModel = require('../model/modelSchema')

module.exports = {
  async resgiter(req, res) {
    const user = await userModel.create(req.body)

    return res.json(user)
  },

  async all(req, res) {
    const allUser = await userModel.find()

    return res.json(allUser)
  }

}



