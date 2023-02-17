const { Customer } = require('../models/Customer')

exports  = {
    customer: async ({customerid}, args, context) => {
        const customer = await Customer.findById(customerid)
        console.log(customer);
        console.log(customerid);
        return customer
    }
} 