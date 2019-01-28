module.exports = {
        typeDefs: /* GraphQL */ `type AggregateBeer {
  count: Int!
}

type AggregateBrewery {
  count: Int!
}

type BatchPayload {
  count: Long!
}

type Beer {
  id: ID!
  createdAt: DateTime!
  name: String!
  brewery: Brewery!
  description: String!
}

type BeerConnection {
  pageInfo: PageInfo!
  edges: [BeerEdge]!
  aggregate: AggregateBeer!
}

input BeerCreateInput {
  name: String!
  brewery: BreweryCreateOneWithoutBeersInput!
  description: String!
}

input BeerCreateManyWithoutBreweryInput {
  create: [BeerCreateWithoutBreweryInput!]
  connect: [BeerWhereUniqueInput!]
}

input BeerCreateWithoutBreweryInput {
  name: String!
  description: String!
}

type BeerEdge {
  node: Beer!
  cursor: String!
}

enum BeerOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  name_ASC
  name_DESC
  description_ASC
  description_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type BeerPreviousValues {
  id: ID!
  createdAt: DateTime!
  name: String!
  description: String!
}

input BeerScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  description: String
  description_not: String
  description_in: [String!]
  description_not_in: [String!]
  description_lt: String
  description_lte: String
  description_gt: String
  description_gte: String
  description_contains: String
  description_not_contains: String
  description_starts_with: String
  description_not_starts_with: String
  description_ends_with: String
  description_not_ends_with: String
  AND: [BeerScalarWhereInput!]
  OR: [BeerScalarWhereInput!]
  NOT: [BeerScalarWhereInput!]
}

type BeerSubscriptionPayload {
  mutation: MutationType!
  node: Beer
  updatedFields: [String!]
  previousValues: BeerPreviousValues
}

input BeerSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: BeerWhereInput
  AND: [BeerSubscriptionWhereInput!]
  OR: [BeerSubscriptionWhereInput!]
  NOT: [BeerSubscriptionWhereInput!]
}

input BeerUpdateInput {
  name: String
  brewery: BreweryUpdateOneRequiredWithoutBeersInput
  description: String
}

input BeerUpdateManyDataInput {
  name: String
  description: String
}

input BeerUpdateManyMutationInput {
  name: String
  description: String
}

input BeerUpdateManyWithoutBreweryInput {
  create: [BeerCreateWithoutBreweryInput!]
  delete: [BeerWhereUniqueInput!]
  connect: [BeerWhereUniqueInput!]
  disconnect: [BeerWhereUniqueInput!]
  update: [BeerUpdateWithWhereUniqueWithoutBreweryInput!]
  upsert: [BeerUpsertWithWhereUniqueWithoutBreweryInput!]
  deleteMany: [BeerScalarWhereInput!]
  updateMany: [BeerUpdateManyWithWhereNestedInput!]
}

input BeerUpdateManyWithWhereNestedInput {
  where: BeerScalarWhereInput!
  data: BeerUpdateManyDataInput!
}

input BeerUpdateWithoutBreweryDataInput {
  name: String
  description: String
}

input BeerUpdateWithWhereUniqueWithoutBreweryInput {
  where: BeerWhereUniqueInput!
  data: BeerUpdateWithoutBreweryDataInput!
}

input BeerUpsertWithWhereUniqueWithoutBreweryInput {
  where: BeerWhereUniqueInput!
  update: BeerUpdateWithoutBreweryDataInput!
  create: BeerCreateWithoutBreweryInput!
}

input BeerWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  brewery: BreweryWhereInput
  description: String
  description_not: String
  description_in: [String!]
  description_not_in: [String!]
  description_lt: String
  description_lte: String
  description_gt: String
  description_gte: String
  description_contains: String
  description_not_contains: String
  description_starts_with: String
  description_not_starts_with: String
  description_ends_with: String
  description_not_ends_with: String
  AND: [BeerWhereInput!]
  OR: [BeerWhereInput!]
  NOT: [BeerWhereInput!]
}

input BeerWhereUniqueInput {
  id: ID
}

type Brewery {
  id: ID!
  createdAt: DateTime!
  name: String!
  beers(where: BeerWhereInput, orderBy: BeerOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Beer!]
  url: String!
}

type BreweryConnection {
  pageInfo: PageInfo!
  edges: [BreweryEdge]!
  aggregate: AggregateBrewery!
}

input BreweryCreateInput {
  name: String!
  beers: BeerCreateManyWithoutBreweryInput
  url: String!
}

input BreweryCreateOneWithoutBeersInput {
  create: BreweryCreateWithoutBeersInput
  connect: BreweryWhereUniqueInput
}

input BreweryCreateWithoutBeersInput {
  name: String!
  url: String!
}

type BreweryEdge {
  node: Brewery!
  cursor: String!
}

enum BreweryOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  name_ASC
  name_DESC
  url_ASC
  url_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type BreweryPreviousValues {
  id: ID!
  createdAt: DateTime!
  name: String!
  url: String!
}

type BrewerySubscriptionPayload {
  mutation: MutationType!
  node: Brewery
  updatedFields: [String!]
  previousValues: BreweryPreviousValues
}

input BrewerySubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: BreweryWhereInput
  AND: [BrewerySubscriptionWhereInput!]
  OR: [BrewerySubscriptionWhereInput!]
  NOT: [BrewerySubscriptionWhereInput!]
}

input BreweryUpdateInput {
  name: String
  beers: BeerUpdateManyWithoutBreweryInput
  url: String
}

input BreweryUpdateManyMutationInput {
  name: String
  url: String
}

input BreweryUpdateOneRequiredWithoutBeersInput {
  create: BreweryCreateWithoutBeersInput
  update: BreweryUpdateWithoutBeersDataInput
  upsert: BreweryUpsertWithoutBeersInput
  connect: BreweryWhereUniqueInput
}

input BreweryUpdateWithoutBeersDataInput {
  name: String
  url: String
}

input BreweryUpsertWithoutBeersInput {
  update: BreweryUpdateWithoutBeersDataInput!
  create: BreweryCreateWithoutBeersInput!
}

input BreweryWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  beers_every: BeerWhereInput
  beers_some: BeerWhereInput
  beers_none: BeerWhereInput
  url: String
  url_not: String
  url_in: [String!]
  url_not_in: [String!]
  url_lt: String
  url_lte: String
  url_gt: String
  url_gte: String
  url_contains: String
  url_not_contains: String
  url_starts_with: String
  url_not_starts_with: String
  url_ends_with: String
  url_not_ends_with: String
  AND: [BreweryWhereInput!]
  OR: [BreweryWhereInput!]
  NOT: [BreweryWhereInput!]
}

input BreweryWhereUniqueInput {
  id: ID
}

scalar DateTime

scalar Long

type Mutation {
  createBeer(data: BeerCreateInput!): Beer!
  updateBeer(data: BeerUpdateInput!, where: BeerWhereUniqueInput!): Beer
  updateManyBeers(data: BeerUpdateManyMutationInput!, where: BeerWhereInput): BatchPayload!
  upsertBeer(where: BeerWhereUniqueInput!, create: BeerCreateInput!, update: BeerUpdateInput!): Beer!
  deleteBeer(where: BeerWhereUniqueInput!): Beer
  deleteManyBeers(where: BeerWhereInput): BatchPayload!
  createBrewery(data: BreweryCreateInput!): Brewery!
  updateBrewery(data: BreweryUpdateInput!, where: BreweryWhereUniqueInput!): Brewery
  updateManyBreweries(data: BreweryUpdateManyMutationInput!, where: BreweryWhereInput): BatchPayload!
  upsertBrewery(where: BreweryWhereUniqueInput!, create: BreweryCreateInput!, update: BreweryUpdateInput!): Brewery!
  deleteBrewery(where: BreweryWhereUniqueInput!): Brewery
  deleteManyBreweries(where: BreweryWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

interface Node {
  id: ID!
}

type PageInfo {
  hasNextPage: Boolean!
  hasPreviousPage: Boolean!
  startCursor: String
  endCursor: String
}

type Query {
  beer(where: BeerWhereUniqueInput!): Beer
  beers(where: BeerWhereInput, orderBy: BeerOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Beer]!
  beersConnection(where: BeerWhereInput, orderBy: BeerOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): BeerConnection!
  brewery(where: BreweryWhereUniqueInput!): Brewery
  breweries(where: BreweryWhereInput, orderBy: BreweryOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Brewery]!
  breweriesConnection(where: BreweryWhereInput, orderBy: BreweryOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): BreweryConnection!
  node(id: ID!): Node
}

type Subscription {
  beer(where: BeerSubscriptionWhereInput): BeerSubscriptionPayload
  brewery(where: BrewerySubscriptionWhereInput): BrewerySubscriptionPayload
}
`
      }
    