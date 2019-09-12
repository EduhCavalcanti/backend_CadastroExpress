const bcrypt = require ('bcrypt')
const createUser = require ('../model/modelSchema')

module.exports = {
  //Usa "create" para criar um usuários
  async store(req, res) {
    //Simplifica req.body
    const body = req.body
    
    //Vai no banco de dados verificar se email já existe!
    const userExists = await createUser.exists({ email: body.email })
    if (userExists) {
      return res.status(400).json('E-mail já cadastrado!')
      //Verifica se foi digitado um nome
    } if (!body.name) {
      return res.status(404).json('Nome obrigatorio!')
      //Verifica se foi digitado uma senha
    } if (!body.password) {
      return res.status(404).json('Senha Obrigatoria!')
      //Verifica se foi digitado um email
    } if (!body.email) {
      return res.status(404).json('Email obrigatorio!')
    }
    //Verificando se as senhas são parecidas
    if (body.password !== body.password2) {
      return res.status(404).json('Senhas incorretas!')
    }
    //Encriptografando senha
    const passwordHash = await bcrypt.hash(body.password, 8)
    body.password = passwordHash
    
    //Criação de usuário
    const user = await createUser.create(body)
    
    return res.json(user)

  },
  //Usa o find para mostrar todos os ussários cadastrados
  async all(req, res) {
    const allUser = await createUser.find()
    //Retorna todos os usuários
    return res.json(allUser)
  },
  
  //fazer alteração no usuário quando tiver com token ok quando foi passado pela rota
  async update(req, res) {
    const { email ,oldpassword } = req.body //Vai pegar o email e a senha para fazer alteração do usuário
    //const user = await createUser.findByPk(req.userId)// Utiliza o findByPk pra procurar o ID do usuário, que foi passado no parametro
    const userPassOk = await createUser.findOne({email}).select('+password') 
    //Logica de update de email...Se quiser mudar o email para outro
    if(email !== userPassOk.email){
    //Vai no banco de dados verificar se email já existe!
    if (userPassOk) {
    return res.status(400).json('E-mail já cadastrado!')
    }
    //Verifica se as senhas são iguais...Para depois fazer o update!
  } if(oldpassword && !(await bcrypt.compare(oldpassword, userPassOk.password))){//Se ele informou a senha vai querer alterar
    return res.status(401).json('Senha incorreta')
  }
    //Encriptografando senha
    const passwordHash = await bcrypt.hash(req.body.password, 8)
    req.body.password = passwordHash
    
    //Usuário atualizado com novos dados
    const userUp = await createUser.update(req.body)
    
    return res.json("Usuário Atualizado com sucesso")
  }


}


