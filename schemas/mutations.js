const { gql } = require("apollo-server");

module.exports = typeDefs = gql`

    type Mutation{
        addCustomer(input: CustomerInput):Customer
        updateCustomer(input: CustomerInput):Customer
        
        addAttendence(input: AttendenceInput):AttendenceLogs
        updateAttendence(input: AttendenceInput):AttendenceLogs
        
        addBalance(input: BalanceInput):Balance
        updateBalance(input: BalanceInput):Balance

        addEmployee(input: EmployeeInput):Employee
        updateEmployee(input: EmployeeInput):Employee
        
        addOrder(input: OrderInput):Order
        updateOrder(input: OrderInput):Order

        addPayment(input: PaymentInput):Payment
        updatePayment(input: PaymentInput):Payment

        addUser(input: UserInput):User
        updateUser(input: UserInput):User
    }

    input CustomerInput{
        name:String!
        mobile:String
        home:String
        country: String
        city:String
    }
    
    input AttendenceInput{
        employeeId: String!
        checkIn:String
        checkOut:String
    }
    
    input BalanceInput{
        customerId: String
        gold:Float
        cash:Float
    }
    
    input EmployeeInput{
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
