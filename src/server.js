const express = require('express')
const routes = require ('./routes/route')
const mongoose = require ('mongoose')
const cors = require ('cors')

const server = express()

server.use(cors())
server.use(express.json())
server.use(express.urlencoded({extended:true}))

mongoose.connect(
  'mongodb+srv://sport:sport@cluster0-0glwb.mongodb.net/test?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology:true,
})

server.use(routes)

server.listen(3333, ()=>{
  return console.log('Servidor está rodando!')
})