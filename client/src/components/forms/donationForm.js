import React from "react";
import { useQuery } from '@apollo/client';
import { QUERY_DONORS } from "../../utils/queries";
import { QUERY_STUDENTS } from "../../utils/queries"

const DonationForm = () => {
<DropdownButton id="dropdown-basic-button" title="Dropdown button">
  <Dropdown.Item href="#/action-1">Students</Dropdown.Item>
    

  <Dropdown.Item href="#/action-2">Donation Amount</Dropdown.Item>


  <Dropdown.Item href="#/action-3">Donation Date</Dropdown.Item>


</DropdownButton>

export default DonationForm;