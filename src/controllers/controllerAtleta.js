const createAtlets = require('../model/atletaSchema')

module.exports = {
    async store (req, res){
        const atlets = await createAtlets.create(req.body)
        return res.json(atlets)
    },

    async all (req, res){
        const atletsAll = await createAtlets.find()
        return res.json(atletsAll)
    }
}