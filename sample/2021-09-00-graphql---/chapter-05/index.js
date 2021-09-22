const { ApolloServer, gql } = require('apollo-server');

// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.
const typeDefs = gql`
    type Query {
        totalPhotos: Int!
    }

    type Mutation {
        postPhoto(name: String! description: String): Boolean!
    }
`;

var photos = []

const resolvers = {
    Query: {
        totalPhotos: () => photos.length
    },

    Mutation: {
        postPhoto(parent, args) {
            photos.push(args)
            return true
        }
    }
};

// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({ typeDefs, resolvers });

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
