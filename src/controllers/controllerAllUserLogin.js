const userLogin = require ('../model/modelSchema')

module.exports = {
    async resgiter(res,req){
        userLogin.create({
            name: 'Eduardo',
            email: 'eduh.cavalcanti@hotmail.com',
            password: 'eduardo123'
        })
        return req.send('Testando banco!')
    }
} 