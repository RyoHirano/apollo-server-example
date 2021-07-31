const { ApolloServer } = require('apollo-server');
const { typeDefs } = require('./type')
const { resolvers } = require('./resolver')

const server = new ApolloServer({typeDefs, resolvers});

server.listen().then(({ url }) => {
    console.log(`🚀 Server ready at ${url}`)
})