import { gql } from "@apollo/client";

export const QUERY_ALL = gql`
query all{
  students {
    firstName
    lastName
    parentEmail
    fundingNeeded
  }
  donors {
    firstName
    lastName
    address1
    address2
    city
    state
    zip
    email
    phone
  }
}
`

export const QUERY_DONORS = gql`
  query allDonors {
    donors {
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
    }
  }
`;

export const QUERY_STUDENTS = gql`
  query allStudents {
    students {
      _id
      firstName
      lastName
      parentEmail
      fundingNeeded
    }
  }
`;

export const QUERY_SINGLE_USER = gql`
  query singleUser($userId: ID!) {
    users(userId: userId) {
      _id
      firstName
      lastName
      email
    }
  }
`;

export const QUERY_SINGLE_DONOR = gql`
  query singleDonor($id: ID!) {
    donor(id: $id) {
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
      donations
    }
  }
`;

export const getStudentQuery = gql`
  query GetStudent($studentId: ID!) {
    student(id: $id) {
      _id
      firstName
      lastName
      parentEmail
      fundingNeeded
    }
  }
`;
