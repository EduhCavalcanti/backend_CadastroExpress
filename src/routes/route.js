const express = require ('express')
const createUser = require ('../controllers/controllerAllUserLogin')
const routes = express.Router()

routes.get('/', createUser.resgiter)

module.exports = routes 