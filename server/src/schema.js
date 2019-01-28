const { gql } = require('apollo-server');

const typeDefs = gql`
  type Query {
    beers: [Beer!]!
    beer(id: ID!): Beer
    breweries: [Brewery!]!
    brewery(id: ID!): Brewery
  }

  type Mutation {
    addBeer(
      name: String!,
      brewery: String!
      description: String!,
    ): Beer!
  }

  # type Subscription {

  # }

  type Beer {
    id: ID!
    name: String!
    brewery: Brewery!
    description: String!
  }

  type Brewery {
    id: ID!
    name: String!
    beers: [Beer]!
    url: String!
  }
`

module.exports = typeDefs;
