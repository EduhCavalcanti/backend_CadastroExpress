const express = require ('express')
const multer = require ('multer')// Importa o multer
const multerConf = require ('../config/multer')//Importa as configurações do multer
const createUser = require ('../controllers/controllerAllUserLogin')
const sessionJWT = require ('../controllers/sessionController')
const authmiddleware = require ('../middlewares/auth')

const routes = express.Router()
const upload = multer(multerConf)//Passa multer e as configs dele pro upload

routes.post('/register', createUser.store)
routes.get('/allusers', createUser.all)
routes.get('/login', sessionJWT.sessionCreate)
routes.put('/update', authmiddleware.authControll ,createUser.update)//passa primeiro o authmiddleware para autenticar o token
routes.post('/files', upload.single('file'),(req, res)=>{//Rota teste que vai passar img com nome 'file'
    return res.json({ok:true})
})


module.exports = routes 