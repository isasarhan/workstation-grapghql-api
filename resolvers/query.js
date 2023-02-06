const { Balance } = require("../models/Balance")
const { Customer } = require("../models/Customer")
const { Employee } = require("../models/Employee")
const { Order } = require("../models/Order")
const { Payment } = require("../models/Payment")
const { User } = require("../models/User")

module.exports = Query = {
    customer: async (parent, { id }, context) => {
        const result = await Customer.findById(id)
        return result
    },
    customers: async () => {
        const result = await Customer.find()
        return result
    },
    employee: async (parent, { id }, context) => {
        const result = await Employee.findById(id)
        return result
    },
    employees: async () => {
        const result = await Employee.find()
        return result 
    },
    balance: async (parent, { id }, context) => {
        const result = await Balance.findById(id)
        return result
    },
    balances: async () => {
        const result = await Balance.find()
        return result
    },
    order:async (parent,{id}, context) => {
        const result = await Order.findById(id)
        return result
    },
    orders: async () => {
        const result = await Order.find()
        return result
    },
    user: async (parent, {id}, context) => {
        const result = await User.findById(id)
        return result
    },
    users: async () => {
        const result = await User.find()
        return result
    },
    payment: async (parent, {id}, context) => {
        const result = await Payment.findById(id)
        return result
    },
    payments: async () => {
        const result = await Payment.find()
        return result
    }
    // customer: () => { return "Customers" },
    // addCustomer: (parent, args, context) => { console.log("HI");  }
}
