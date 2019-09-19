const mongoose = require ('mongoose')

const atletas = new mongoose.Schema({
    nome:{
        type: String,
        required: true
    },
    filiacao:{
        pai:{
            type:String,
            require:true
        },
        mae:{
            type:String,
            require:true
        }
    },
    photoName:String,
    url:String,
    date: {
        type: Date,
        default: Date.now
    },
    nacionalidade:{
        type:String,
        required:true
    },
    natural:{
        type:String,
        required:true
    },
    dataNasc:{
        type:Number,
        required:true
    },
    endereco:{
        rua:{
            type:String,
            require:true
        },
        bairro:{
            type:String,
            require:true
        },
        cidade:{
            type:String,
            require:true
        },
        estado:{
            type:String,
            require:true
        },
        cep:{
            type:Number
        },
        n:{
            type:Number
        }

    },
    contato:{
        fone:{
            type:Number,
            require:true
        },
        email:{
            type:String,
            require:true
        }
    },
    dados:{
        cpf:{
            type:Number,
            require:true
        },
        rg:{
            type:Number,
            require:true
        }
    },
    escolaridade:{
        type:String,
    }

});

module.exports = new mongoose.model('atletasSchema', atletas)