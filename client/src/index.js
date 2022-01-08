import React from 'react';
import { render } from "react-dom";
import { 
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import Dashboard from './veiws/dashboard';
import StudentVeiw from './veiws/studentVeiw';
import DonorVeiw from './veiws/donorVeiw';
import AccountVeiw from './veiws/accountVeiw';

const rootElement = document.getElementById("root");
render (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App/>}/>,
      <Route path="Dashbaord" element={<Dashboard/>}/>,
      <Route path="Student" element={<StudentVeiw/>}/>,
      <Route path="Donor" element={<DonorVeiw/>}/>,
      <Route path="Account" element={<AccountVeiw/>}/>,
    </Routes>
  </BrowserRouter>,
rootElement
);

