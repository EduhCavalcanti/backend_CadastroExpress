const express = require ('express')
const createUser = require ('../controllers/controllerAllUserLogin')
const loginUser = require ('../controllers/controllerLogin')

const routes = express.Router()

routes.post('/register', createUser.register)
routes.get('/allusers', createUser.all)
routes.get('/login', loginUser.login)


module.exports = routes 