import { ApolloServer, gql } from "apollo-server"; //write a GraphQL query that is parsed into a standard GraphQL AST
// multi line strig
// gql helps validate the schema
const typeDefs = gql`
  schema {
    query: Query
  }

  type Query {
    greeting: String
    man: String
  }
`;

const resolvers = {
  // resolver function resolves the query for a shchema when a client makes a request to it.
  Query: {
    greeting: () => "Hello World!",
    man: () => "ttut",
  },
};

const server = new ApolloServer({ typeDefs, resolvers });
const { url } = await server.listen({ port: 9000 });
console.log(`server listening at ${url}`);
