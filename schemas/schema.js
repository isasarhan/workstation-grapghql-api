const { gql } = require("apollo-server");

module.exports = typeDefs = gql`
    type Query{
        customer(id: ID!):Customer
        customers:[Customer]
        employee(id:ID!):Employee
        employees:[Employee]
        balance(id:ID!):Balance
        balances:[Balance]
        order(id:ID!):Order
        orders:[Order]
        user(id:ID!):User
        users:[User]
        payment(id:ID!):Payment
        payments:[Payment]
        attendence(input: AttendenceInput):[AttendenceLogs]
        attendences:[AttendenceLogs]
    }
    type Customer{
        id:ID!
        name:String!
        mobile:String
        home:String
        country: String
        city:String
        balance:Balance
    }

    type Balance{
        id:ID!
        customer: Customer!
        gold:Float
        cash:Float
    }   
    type AttendenceLogs{
        id:ID!
        employee: Employee!
        checkIn:String
        checkOut:String
    }
    type Order{
        id:ID!
        weight: Float!
        finnes: String
        perGram: Int
        bonuses: Float
        date: String
    }
    type Employee{
        id:ID!
        name: String!
        gender: String
        avatar: String
        designation: String
        mobile: String
        salary: Float
    }
    type Payment{
        id:ID!
        customer: Customer
        gold: Float
        cash: Float
        date: String
    }
    type User {
        id:ID!
        name: String
        email: String
        password: String
        isAdmin: Boolean
    }
    
    
`
