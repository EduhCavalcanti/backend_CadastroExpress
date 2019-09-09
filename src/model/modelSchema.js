const mongoose = require ('mongoose')
const { Schema } = mongoose

const adm = new Schema({
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

module.exports= new mongoose.model('ModelSchema', adm)