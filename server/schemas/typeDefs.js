const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Donor {
    _id: ID
    firstName: String
    lastName: String
    address1: String
    address2: String
    city: String
    state: String
    zip: Int
    email: String
    phone: String
    students: [Student]
  }

  type Student {
    _id: ID
    firstName: String
    lastName: String
    parentEmail: String
    fundingNeeded: Int
  }

  type User {
    _id: ID
    firstName: String
    lastName: String
    email: String
    password: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    donors: [Donor]!
    donor(donorId: ID!): Donor
    users: [Users]!
    user(): User
  }

  type Mutation {
    addUser(firstName: String!, lastName: String!, email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;