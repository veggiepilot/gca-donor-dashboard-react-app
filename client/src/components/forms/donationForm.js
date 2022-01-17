import React from "react";
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown'
import { useQuery } from '@apollo/client';
import { QUERY_STUDENTS } from "../../utils/queries"

const DonationForm = () => {
  return(
  <DropdownButton id="dropdown-basic-button" title="Dropdown button">
    <Dropdown.Item href="#/action-1">Students</Dropdown.Item>
      

    <Dropdown.Item href="#/action-2">Donation Amount</Dropdown.Item>


    <Dropdown.Item href="#/action-3">Donation Date</Dropdown.Item>


  </DropdownButton>
  )
}

export default DonationForm;
