const { ApolloServer, gql } = require("apollo-server");
const CustomerSchema = require('./schemas/customer') 
const CustomerResolver = require('./resolvers/customer') 
require('dotenv').config()
require("./db")()


const 
    Query= {
        hello: () => { return "World" },
    }


const server = new ApolloServer({
    typeDefs:[CustomerSchema],
    resolvers:{
        Query
    }
})

server.listen().then(({ url }) => {
    console.log("Server is up at " + url);
  });
  