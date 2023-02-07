const Joi = require('joi')
const { model, Schema } = require('mongoose')

const balanceSchema = new Schema({
    customerid: { type: String, required: true, unique: true },
    gold: { type: Number, default: 0 },
    cash: { type: Number, default: 0 },
})

const Balance = model('Balance', balanceSchema)

function validateBalance(balance) {
    const schema = Joi.object({
        customerid: Joi.objectId().required(),
        gold: Joi.number(),
        cash: Joi.number()
    }) 
    return schema.validate(balance)

}
module.exports = { Balance, validateBalance }