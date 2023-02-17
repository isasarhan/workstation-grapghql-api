const { Balance } = require('../models/Balance.js')

exports.Customer = {

    balance: async ({ id: customerId }, args, context) => {
        const balance = await Balance.findOne({
            customerid: customerId
        })
        console.log(rest);
        return balance
    }
} 