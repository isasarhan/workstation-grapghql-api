const { Customer } = require('../models/Customer')
module.exports = Mutation = {
    addCustomer: (parent, { input }, context) => {
        let customer = new Customer(input)
        customer.save()
        return customer
    }
}