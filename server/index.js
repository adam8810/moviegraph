const { ApolloServer } = require('apollo-server');
const resolvers = require('./resources/resolvers');
const dataSources = require('./dataSources');
const typeDefs = require('./schema');

const server = new ApolloServer({
  typeDefs,
  dataSources,
  resolvers,
});

server.listen().then(() => {
  console.log(`
    https://studio.apollographql.com/sandbox
  `);
});

module.exports = server;