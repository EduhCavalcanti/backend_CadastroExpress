const express = require ('express')
const createUser = require ('../controllers/controllerAllUserLogin')
//const allUser = require ('../controllers/allUsersController')
const routes = express.Router()

routes.post('/register', createUser.resgiter)
routes.get('/allusers', createUser.all)

module.exports = routes 