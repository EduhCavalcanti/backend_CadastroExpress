const mongoose = require('mongoose')
const bcrypt = require ('bcrypt')

const users = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true
  }
})

//Encriptação de senha no model mesmo!
users.pre('save', async (next)=>{
  const hash = await bcrypt.hash(this.password, 10)
  this.password = hash

  next()
})

module.exports = new mongoose.model('modelUsers', users)