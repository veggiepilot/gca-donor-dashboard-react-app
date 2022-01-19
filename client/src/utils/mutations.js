import { gql } from "@apollo/client";

export const ADD_USER = gql`
  mutation addUser(
    $firstName: String!
    $lastName: String!
    $email: String!
    $password: String!
  ) {
    addUser(
      firstName: $firstName
      lastName: $lastName
      email: $email
      password: $password
    ) {
      token
      user {
        _id
        email
      }
    }
  }
`;

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        email
      }
    }
  }
`;

export const ADD_DONOR = gql`
  mutation addDonor(
    $firstName: String!
    $lastName: String!
    $address1: String!
    $address2: String!
    $city: String!
    $state: String!
    $zip: Int!
    $email: String!
    $phone: String!
  ) {
    addDonor(
      firstName: $firstName
      lastName: $lastName
      address1: $address1
      address2: $address2
      city: $city
      state: $state
      zip: $zip
      email: $email
      phone: $phone
    ) {
      firstName
      lastName
    }
  }
`;

export const ADD_STUDENT = gql`
  mutation addStudent(
    $firstName: String!
    $lastName: String!
    $parentEmail: String!
    $fundingNeeded: Int!
  ) {
    addStudent(
      firstName: $firstName
      lastName: $lastName
      parentEmail: $parentEmail
      fundingNeeded: $fundingNeeded
    ) {
      _id
      firstName
      lastName
      parentEmail
      fundingNeeded
    }
  }
`;

export const ADD_DONATION = gql`
 mutation addDonation(
   $donorId: ID!
   $amount: Int!
   $date: String!
   $studentId: ID!
   ){
   addDonation(
     donorId: $donorId
     amount: $amount
     studentId: $studentId
     date: $date
   ) {
       _id
       firstName
        lastName
        address1
        address2
        city
        state
        zip
        email
        phone
        donation {
          _id
          studentId
          amount
          date
     }
   }
 }
`;

export const REMOVE_DONOR = gql`
mutation removeDonor($donorId:ID!){
  removeDonor(donorId:$donorId){
    _id
    firstName
     lastName
     address1
     address2
     city
     state
     zip
     email
     phone
     donation
  }
}
`

// test mutation for graphql
// mutation { addStudent( firstName: "Sophie", lastName: "Maskill", parentEmail: "sarah@gmail.com", fundingNeeded: 3123){
//   firstName
//   lastName
//   parentEmail
//   fundingNeeded
// }
// }
