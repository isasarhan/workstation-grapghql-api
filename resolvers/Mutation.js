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
        const { id, ...body } = input
        let result = await Customer.findByIdAndUpdate(id, body, { new: true })
        return result
    },
    deleteCustomer: async (parent, { id }, context) => {
        let result = await Customer.findByIdAndDelete(id)
        return result
    },
    addEmployee: (parent, { input }, context) => {
        let employee = new Employee(input)
        employee.save()
        return employee
    },
    updateEmployee: async (parent, { input }, context) => {
        const { id, ...body } = input
        let result = await Employee.findByIdAndUpdate(id, body, { new: true })
        return result
    },
    deleteEmployee: async (parent, { id }, context) => {
        let result = await Employee.findByIdAndDelete(id)
        return result
    },
    addAttendence: (parent, { input }, context) => {
        let attendence = new Attendence(input)
        attendence.save()
        return attendence
    },
    updateAttendence: async (parent, { input }, context) => {
        const { id, ...body } = input
        let result = await Attendence.findByIdAndUpdate(id, body, { new: true })
        return result
    },
    deleteAttendence: async (parent, { id }, context) => {
        let result = await Attendence.findByIdAndDelete(id)
        return result
    },
    addBalance: (parent, { input }, context) => {
        let balance = new Balance(input)
        balance.save()
        return balance
    },
    updateBalance: async (parent, { input }, context) => {
        const { id, ...body } = input
        let result = await Balance.findByIdAndUpdate(id, body, { new: true })
        return result
    },
    deleteBalance: async (parent, { id }, context) => {
        let result = await Balance.findByIdAndDelete(id)
        return result
    },
    addOrder: (parent, { input }, context) => {
        let order = new Order(input)
        order.save()
        return order
    },
    updateOrder: async (parent, { input }, context) => {
        const { id, ...body } = input
        let result = await Order.findByIdAndUpdate(id, body, { new: true })
        return result
    },
    deleteOrder: async (parent, { id }, context) => {
        let result = await Order.findByIdAndDelete(id)
        return result
    },
    addPayment: (parent, { input }, context) => {
        let payment = new Payment(input)
        payment.save()
        return payment
    },
    updatePayment: async (parent, { input }, context) => {
        const { id, ...body } = input
        let result = await Payment.findByIdAndUpdate(id, body, { new: true })
        return result
    },
    deletePayment: async (parent, { id }, context) => {
        let result = await Payment.findByIdAndDelete(id)
        return result
    },
}