const { gql } = require("apollo-server");

module.exports = typeDefs = gql`

    type Mutation{
        addCustomer(input: CustomerInput):Customer
        updateCustomer(input: CustomerInput):Customer
        deleteCustomer(id: ID!):Customer

        addAttendence(input: AttendenceInput):AttendenceLogs
        updateAttendence(input: AttendenceInput):AttendenceLogs
        deleteAttendence(id: ID!):AttendenceLogs
        
        addBalance(input: BalanceInput):Balance
        updateBalance(input: BalanceInput):Balance
        deleteBalance(id: ID!):Balance

        addEmployee(input: EmployeeInput):Employee
        updateEmployee(input: EmployeeInput):Employee
        deleteEmployee(id: ID!):Employee
        
        addOrder(input: OrderInput):Order
        updateOrder(input: OrderInput):Order
        deleteOrder(id: ID!):Order

        addPayment(input: PaymentInput):Payment
        updatePayment(input: PaymentInput):Payment
        deletePayment(id: ID!):Payment

        addUser(input: UserInput):User
        updateUser(input: UserInput):User
        deleteUser(id: ID!):User
    }

    input CustomerInput{
        id:ID
        name:String
        mobile:String
        home:String
        country: String
        city:String
    }
    
    input AttendenceInput{
        id:ID
        employeeId: String!
        checkIn:String
        checkOut:String
    }
    
    input BalanceInput{
        id:ID
        customerid: String
        gold:Float
        cash:Float
    }
    
    input EmployeeInput{
        id:ID
        name: String!
        gender: String
        avatar: String
        designation: String
        mobile: String
        salary: Float
    }
    
    input OrderInput{
        weight: Float!
        finnes: String
        perGram: Int
        bonuses: Float
        date: String
    }
    
    input PaymentInput{
        customerId: String
        gold: Float
        cash: Float
        date: String
    }
    
    input UserInput{
        name:String!
        mobile:String
        home:String
        country: String
        city:String
    }
    
`
