const { ApolloServer } = require("apollo-server");
const schema = require('./schemas/schema') 
const mutations = require('./schemas/mutations') 

const Query = require('./resolvers/query')
const Mutation = require('./resolvers/Mutation')
const Customer = require('./resolvers/Customer')

const express = require('express')
const cors = require('cors')
const app = express()

app.use(cors())

require('dotenv').config()
require("./start/db")()
require('./start/validation')()
 

const server = new ApolloServer({
    typeDefs:[schema, mutations],
    resolvers: {
        Query,
        Mutation,
        Customer
    }
})
const port = process.env.PORT || 3000;
server.listen(port).then(({ url }) => {
    console.log("Server is up at " + url);
});
