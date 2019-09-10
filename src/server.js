const express = require('express')
const routes = require ('./routes/route')
const mongoose = require ('mongoose')
const bodyParser = require ('body-parser')

const server = express()

server.use(routes)
server.use(bodyParser.json())
server.use(express.json())
server.use(express.urlencoded({extended:true}))

mongoose.connect(
  'mongodb+srv://sport:sport@cluster0-0glwb.mongodb.net/test?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology:true,
})

server.listen(3333, ()=>{
  return console.log('Servidor está rodando!')
})