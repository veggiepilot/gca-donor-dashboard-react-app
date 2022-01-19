/* eslint-disable no-unused-vars */
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React from "react";
import Dashboard from "./components/dashboard";
import StudentTabs from "./components/studentTabs";
import DonorsCard from "./components/cards/donorsCard";
import AccountForm from "./components/forms/accountForm";
import DonorForm from "./components/forms/donorForm";
import SignIn from "./views/signIn";
import SignUp from "./views/signUp";
import CreateStudentForm from "./components/forms/createStudentForm";
import Layout from "./views/layout";
import DonationForm from "./components/forms/donationForm";
import SingleDonor from "./components/cards/singleDonor";
import SingleStudent from "./components/cards/singleStudent";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

// Construct our main GraphQL API endpoint
const httpLink = createHttpLink({
  uri: "/graphql",
});

// Construct request middleware that will attach the JWT token to every request as an `authorization` header
const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('id_token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  // Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      {/* <Header />
      <SignIn /> */}
      <Router>
        <Routes>
          {/* Root */}
          <Route path="/" element={<SignIn />} />
          {/* Landing Page / Login  */}
          <Route path="SignIn" element={<SignIn />} />
          <Route path="SignUp" element={<SignUp />} />
          <Route element={<Layout />}>
            {/* Main Dashboard */}
            <Route path="Dashboard" element={<Dashboard />} />
            {/* Students View  Links */}
            <Route path="Student" element={<StudentTabs />} />
            <Route path="NewStudent" element={<CreateStudentForm/>} />
            {/* <Route path="studentinfo/:studentId" element={<SingleStudent/>}/> */}
            {/* Donor View Links */}
            <Route path="Donor" element={<DonorsCard />} />
            <Route path="NewDonor" element={<DonorForm />} />
            <Route path="newdonation/:donorId" element={ <DonationForm/>}/>
            <Route path="donorinfo/:donorId" element={ <SingleDonor/>}/>
            <Route path="Account" element={<AccountForm />} />
          </Route>
        </Routes>
      </Router>
    </ApolloProvider>
  );
}

export default App;
