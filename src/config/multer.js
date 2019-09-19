const multer = require ('multer');
const crypto = require ('crypto');
const {extname, resolve} = require ('path');//Vai utilizar para pecorrer caminho com o nome do arquivo 

module.exports = {
    //A forma que o multer vai guardar os arquivos de imagem
    storage: multer.diskStorage({
        destination: resolve(__dirname, '..', '..', 'temp/uploads'), //Destino dos arquivos
        filename: (req, file, cb) => { //Vai formatar o nome de arquivo
            //Vou criar uma função que adiciona um codigo unico a cada imagem enviada
            crypto.randomBytes(16, (err, res) =>{
                if(err) return cb(err); //Se der erro vai retornar o cb(Callback) passando como parâmetro o 'err'
                //Se não deu erro...
                return cb(null, res.toString('hex') + extname(file.originalname)); // Se não der erro vai pegar o arquivo e transformar ele em um nome hexadecimal
                                                                                  //Fica mais ou menos assim como exemplo... uj1545sderx.png
            });                                                                    
        },
    }),
};