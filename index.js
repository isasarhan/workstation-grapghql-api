const { ApolloServer } = require("apollo-server");
///schemas
const schema = require('./schemas/schema') 
const mutations = require('./schemas/mutations') 
///resolvers
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

async function startApolloServer(server) {
    const {url} = await server.listen({port:port})
    console.log(`Server started at ${url}...`);
}
startApolloServer(server);
