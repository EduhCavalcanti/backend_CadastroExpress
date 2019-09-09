const mongoose = require ('mongoose')

const adm = new mongoose.Schema({
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
},{
    timestamps:true,
})

mongoose.model('modelSchema', adm)