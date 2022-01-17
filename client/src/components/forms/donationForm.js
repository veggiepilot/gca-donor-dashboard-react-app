import React from "react";
import {Dropdown,DropdownButton} from 'react-bootstrap'
import { useQuery } from '@apollo/client';
import { QUERY_STUDENTS} from '../../utils/queries'

const DonationForm = () => {
  const { error, data } = useQuery(QUERY_STUDENTS);

  const students = data?.students || [];
  if (error) {return console.log(error) };


  return(
<DropdownButton id="dropdown-basic-button" title="Dropdown button">
  <Dropdown.Header>Students</Dropdown.Header>
  <Dropdown.Item href="#/action-1">Students</Dropdown.Item>
    

  <Dropdown.Item href="#/action-2">Donation Amount</Dropdown.Item>


  <Dropdown.Item href="#/action-3">Donation Date</Dropdown.Item>


</DropdownButton>
  )
}

export default DonationForm;
