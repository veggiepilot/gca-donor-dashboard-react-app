import { gql } from "@apollo/client";

export const getDonorsQuery = gql`
    {
       donors{
           firstName
           lastName
           address1
           address2
           city
           state
           zip
           email
           phone
           students
       } 
    }
`

export const getStudentsQuery = gql`
    {
        students{
            firstName
            lastName
            parentEmail
            fundingNeeded
            donors
        }
    }
`

export const getUsersQuery = gql`
    {
        users{
            firstName
            lastName
            email
        }
    }
`

export const getDonorQuery = gql`
    query GetDonor($id: ID!){
        donor(id: $id){
            id
            firstName
            lastName
            address1
            address2
            city
            state
            zip
            email
            phone
            students
        }
    }
`

export const getStudentQuery = gql`
    query GetStudent($id: ID!){
        student(id: $id){
            id
            firstName
            lastName
            parentEmail
            fundingNeeded
            donors
        }
    }
`

export const getUserQuery = gql`
    query GetUser($id: ID!){
        user(id: $id){
            id
            firstName
            lastName
            email
        }
    }
`

export const addDonorMutation = gql`
    mutation(
        $firstName: String!, 
        $lastName: String!, 
        $address1: String!, 
        $address2: String!, 
        $city: String!, 
        $state: String!, 
        $zip: Int!, 
        $email: String!, 
        $phone: String!
        ){
        addDonor(
            firstName: $firstName, 
            lastName: $lastName,
            address1: $address1,
            address2: $address2,
            city: $city,
            state: $state,
            zip: $zip,
            email: $email,
            phone: $phone
            ){
            firstName
            lastName
        }
    }
`

export const addStudentMutation = gql`
    mutation(
        $firstName: String!, 
        $lastName: String!, 
        $parentEmail: String!, 
        $address2: String!, 
        $fundingNeeded: String!, 
        $donors: String!, 
        ){
        addStudent(
            firstName: $firstName, 
            lastName: $lastName,
            parentEmail: $parentEmail,
            fundingNeeded: $fundingNeeded,
            donors: $donors,
            ){
            firstName
            lastName
        }
    }
`

export const addUserMutation = gql`
    mutation(
        $firstName: String!, 
        $lastName: String!, 
        $email: String!, 
        ){
        addUser(
            firstName: $firstName, 
            lastName: $lastName,
            email: $email,
            ){
            firstName
            lastName
        }
    }
`