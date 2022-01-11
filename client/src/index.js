<<<<<<< HEAD
import React from "react";
import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App";
import DashboardView from "./views/dashboardView";
import StudentVeiw from "./views/studentView";
import DonorView from "./views/donorView";
import AccountView from "./views/accountView";
import NewDonationView from "./views/newDonationView";
import SignIn from "./views/signIn";
import SignUp from "./views/signUp";
import StudentCreationView from "./views/studentCreationView";


const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Routes>
      {/* Root */}
      <Route path="/" element={<App />} />,
      {/* Landing Page / Login  */}
      <Route path="SignIn" element={<SignIn />} />,
      <Route path="SignUp" element={<SignUp />} />,
      {/* Main Dashboard */}
      <Route path="Dashboard" element={<DashboardView />} />,
      {/* Students View  Links */}
      <Route path="Student" element={<StudentVeiw />} />,
      <Route path="CreateStudent" element={<StudentCreationView/>} />,
      {/* Donor View Links */}
      <Route path="Donor" element={<DonorView />} />,
      <Route path="NewDonation" element={<NewDonationView/>}/>,
      {/* Update Account */}
      <Route path="Account" element={<AccountView />} />,
    </Routes>
  </BrowserRouter>,
  rootElement
=======
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
>>>>>>> main
);
reportWebVitals();