const { ApolloServer } = require('apollo-server-lambda');
const resolvers = require('./resources/resolvers');
const dataSources = require('./dataSources');
const typeDefs = require('./schema');

const server = new ApolloServer({
  typeDefs,
  dataSources,
  resolvers,
});

exports.graphqlHandler = server.createHandler({
  expressGetMiddlewareOptions: {
    cors: {
      origin: '*',
      credentials: false,
    }
  },
});
