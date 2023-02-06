const { Customer } = require('../models/Customer')
const { Employee } = require('../models/Employee')
const { Payment } = require('../models/Payment')
const { Balance } = require('../models/Balance')
const { Order } = require('../models/Order')
const { Attendence } = require('../models/Attendencelog')

module.exports = Mutation = {
    /// Customer Mutations
    addCustomer: (parent, { input }, context) => {
        let customer = new Customer(input)
        customer.save()
        return customer
    },
    updateCustomer: async (parent, { input }, context) => {
        // let result = await Customer.find
    },
    addEmployee: (parent, { input }, context) => {
        let employee = new Employee(input)
        employee.save()
        return employee
    },
    addAttendence: (parent, { input }, context) => {
        let attendence = new Attendence(input)
        attendence.save()
        return attendence
    },
    addBalance: (parent, { input }, context) => {
        let balance = new Balance(input)
        balance.save()
        return balance
    },
    addOrder: (parent, { input }, context) => {
        let order = new Order(input)
        order.save()
        return order
    },
    addPayment: (parent, { input }, context) => {
        let payment = new Payment(input)
        payment.save()
        return payment
    }
}