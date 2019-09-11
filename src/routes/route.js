const express = require ('express')
const createUser = require ('../controllers/controllerAllUserLogin')

const routes = express.Router()

routes.post('/register', createUser.register)
routes.get('/allusers', createUser.all)


module.exports = routes 