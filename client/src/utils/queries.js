import { gql } from "@apollo/client";

export const QUERY_ALL = gql`
query all{
  students {
    _id
    firstName
    lastName
    parentEmail
    fundingNeeded
  }
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
    donation {
      amount
      date
      studentId
    }
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
      donation {
        amount
        date
        studentId
      }
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
  query singleDonor($donorId: ID!) {
    donor(donorId: $donorId) {
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
      donation{
        studentId
        amount
        date
      }
    }
  }
`;

export const QUERY_SINGLE_STUDENT = gql`
  query singleStudent($studentId: ID!) {
    student(studentId: $studentId) {
      _id
      firstName
      lastName
      parentEmail
      fundingNeeded
    }
  }
`;
