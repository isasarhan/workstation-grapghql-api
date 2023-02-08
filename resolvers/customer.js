const { Balance } = require('../models/Balance.js')

module.exports = Customer = {

    balance: async ({ id: customerId }, args, context) => {
        const balance = await Balance.findOne({
            customerid: customerId
        })
        return balance
    }
} 