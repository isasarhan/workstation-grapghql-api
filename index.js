const { ApolloServer } = require("apollo-server");
const schema = require('./schemas/schema') 
const mutations = require('./schemas/mutations') 
const Query = require('./resolvers/query')
const Mutation = require('./resolvers/Mutation')

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
        Mutation
    }
})

server.listen().then(({ url }) => {
    console.log("Server is up at " + url);
});
