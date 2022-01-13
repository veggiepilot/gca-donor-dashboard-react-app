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
    address1: String
    address2: String
    city: String
    state: String
    zip: Int
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
    users: [User]!
    user(userId: ID!): User
  }

  type Mutation {
    addUser(firstName: String!, lastName: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth

    removeUser(userId: ID!): User
  }
`;

module.exports = typeDefs;