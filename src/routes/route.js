const express = require ('express')
const createUser = require ('../controllers/controllerAllUserLogin')
const sessionJWT = require ('../controllers/sessionController')
const authmiddleware = require ('../middlewares/auth')

const routes = express.Router()

routes.post('/register', createUser.register)
routes.get('/allusers', createUser.all)
routes.get('/login', sessionJWT.sessionCreate)
routes.put('/update', authmiddleware.authControll ,createUser.update)//passa primeiro o authmiddleware para autenticar o token


module.exports = routes 