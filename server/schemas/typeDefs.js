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
    donation: [Donation]!
  }

  type Donation {
    _id: ID
    amount: Int
    date: String
    studentId: ID
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
    users: [User]!
    user(userId: ID!): User
    students: [Student]!
    student( studentId: ID!):Student
  }

  type Mutation {
    addUser(firstName: String!, lastName: String!, email: String!, password: String!): Auth

    login(email: String!, password: String!): Auth

    addStudent(
      firstName: String!,
      lastName: String!,
      parentEmail: String!,
      fundingNeeded: Int!
    ): Student
    
    addDonor(
      firstName: String!,
      lastName: String!,
      address1: String!,
      address2: String!,
      city: String!,
      state: String!,
      zip: Int!,
      email: String!,
      phone: String!
    ): Donor
    
    addDonation(
      donorId: ID!,
      amount: Int!,
      date: String!,
      studentId: ID!
      ): Donor
      
      removeDonor(donorId:ID!): Donor
    
  }
`;
module.exports = typeDefs;