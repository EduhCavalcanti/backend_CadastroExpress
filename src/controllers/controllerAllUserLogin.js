const userLogin = require ('../model/modelSchema')

module.exports = {
    async resgiter(res,req){
        const userCreate = await userLogin.create(req.body)
        return req.send('TEste')
    }
}