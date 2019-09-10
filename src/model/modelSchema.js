const mongoose = require ('mongoose')

const teste = new mongoose.Schema({
    name:{
        type: String,
        required: true,
    },
    email:{
        type: String,
        required: true,
    },
    password:{
        type: String,
        required: true
    }
})

module.exports = new mongoose.model('testando', teste)