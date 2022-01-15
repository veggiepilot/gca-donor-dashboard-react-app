import React from "react";
import { Container } from "react-bootstrap";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import { useQuery } from "@apollo/client";
import { QUERY_STUDENTS } from "../../utils/queries";

const DonationForm = () => {
  return (
    <Container
    className=" d-flex flex-column w-75 justify-content-top align-content-center p-4 min-vh-100"
    fluid
  >
    <DropdownButton id="dropdown-basic-button" title="Donation">
      <Dropdown.Item href="#/action-1">Students</Dropdown.Item>

      <Dropdown.Item href="#/action-2">Donation Amount</Dropdown.Item>

      <Dropdown.Item href="#/action-3">Donation Date</Dropdown.Item>
    </DropdownButton>
    </Container>
  );
};

export default DonationForm;
