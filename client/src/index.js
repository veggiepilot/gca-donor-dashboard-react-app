import React from "react";
import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App";
import Dashboard from "./views/dashboard";
import StudentVeiw from "./views/studentView";
import DonorVeiw from "./views/donorView";
import AccountView from "./views/accountView";
import SignIn from "./components/signIn";
import SignUp from "./components/signUp";

const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />,
      <Route path="SignIn" element={<SignIn />} />,
      <Route path="SignUp" element={<SignUp />} />,
      <Route path="Dashboard" element={<Dashboard />} />,
      <Route path="Student" element={<StudentVeiw />} />,
      <Route path="Donor" element={<DonorVeiw />} />,
      <Route path="Account" element={<AccountView />} />,
    </Routes>
  </BrowserRouter>,
  rootElement
);
