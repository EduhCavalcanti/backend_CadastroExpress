const express = require ('express')
const createUser = require ('../controllers/controllerAllUserLogin')
const sessionJWT = require ('../controllers/sessionController')

const routes = express.Router()

routes.post('/register', createUser.register)
routes.get('/allusers', createUser.all)
routes.get('/login', sessionJWT.sessionCreate)
routes.put('/update',createUser.update)


module.exports = routes 