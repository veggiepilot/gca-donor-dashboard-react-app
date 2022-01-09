import React from "react";
import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App";
import DashboardView from "./views/dashboardView";
import StudentVeiw from "./views/studentView";
import DonorView from "./views/donorView";
import AccountView from "./views/accountView";
import SignIn from "./views/signIn";
import SignUp from "./views/signUp";

const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />,
      <Route path="SignIn" element={<SignIn />} />,
      <Route path="SignUp" element={<SignUp />} />,
      <Route path="Dashboard" element={<DashboardView />} />,
      <Route path="Student" element={<StudentVeiw />} />,
      <Route path="Donor" element={<DonorView />} />,
      <Route path="Account" element={<AccountView />} />,
    </Routes>
  </BrowserRouter>,
  rootElement
);
