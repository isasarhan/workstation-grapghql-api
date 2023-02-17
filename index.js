const { ApolloServer } = require("apollo-server");
///schemas
const schema = require('./schemas/schema.js') 
const mutations = require('./schemas/mutations.js') 
///resolvers
const Query = require('./resolvers/query.js')
const Mutation = require('./resolvers/Mutation.js')
const Customer = require('./resolvers/Customer')
// const Balance = require('./resolvers/Balance')
// const { Balance } = require('./models/Balance.js')
// const { Customer } = require('./models/Customer')

const express = require('express')
const cors = require('cors')
const app = express()

app.use(cors())

require('dotenv').config()
require("./start/db")()
require('./start/validation')()
const resolvers = {
    Query,
    Mutation,
    Customer
    // Balance:{
    //     customer: async ({customerid}, args, context) => {
        //         const customer = await Customer.findById(customerid)
        //         console.log(customer);
        //         console.log(customerid);
    //         return customer
    //     }
    // }
}
const server = new ApolloServer({
    typeDefs:[schema, mutations],
    resolvers
})

const port = process.env.PORT || 3000;

async function startApolloServer(server) {
    const {url} = await server.listen({port:port})
    console.log(`Server started at ${url}...`);
}
startApolloServer(server);
// server.listen().then((url) => {console.log(url)})
