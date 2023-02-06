const { Schema, model } = require('mongoose')
const Joi = require('joi')

const schema = new Schema({
    name: { type: String, required: true, maxlength: 100 },
    mobile: { type: String },
    home: { type: String },
    country: { type: String },
    city: { type: String },
})

const Customer = model('Customer', schema)

function validateCustomer(customer) {
    const schema = Joi.object({
        name: Joi.string().required().min(5).max(100),
        mobile: Joi.string().required(),
        home: Joi.string().required().min(5).max(1024),
        city: Joi.string(),
        country: Joi.string()

    })
    return schema.validate(customer)
}

module.exports = { Customer, validateCustomer }