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
import DashboardView from "./views/dashboardView";
import StudentVeiw from "./views/studentView";
import DonorView from "./views/donorView";
import AccountView from "./views/accountView";
import NewDonationView from "./views/newDonationView";
import SignIn from "./views/signIn";
import SignUp from "./views/signUp";
import StudentCreationView from "./views/studentCreationView";
import Layout from "./views/layout";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

// Construct our main GraphQL API endpoint
const httpLink = createHttpLink({
  uri: "/graphql",
});

// Construct request middleware that will attach the JWT token to every request as an `authorization` header
const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem("id_token");
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
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

          <Route element={<Layout/>}>
            {/* Main Dashboard */}
            <Route path="Dashboard" element={<DashboardView />} />
            {/* Students View  Links */}
            <Route path="Student" element={<StudentVeiw />} />
            <Route path="NewStudent" element={<StudentCreationView />} />
            {/* Donor View Links */}
            <Route path="Donor" element={<DonorView />} />
            <Route path="NewDonation" element={<NewDonationView />} />
            <Route path="Account" element={<AccountView />} />
          </Route>
        </Routes>
      </Router>
    </ApolloProvider>
  );
}

export default App;
