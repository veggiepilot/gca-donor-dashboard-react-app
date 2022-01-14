/* eslint-disable no-unused-vars */
import { Form, Row, Col, Button, Stack, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { ADD_STUDENT } from "../../utils/mutations";


const CreateStudentForm = () => {
  const [formState, setFormState] = useState({
    firstName: "",
    lastName: "",
    parentEmail: "",
    fundingNeeded: "",
  });

  const [addStudent, { error, data }] = useMutation(ADD_STUDENT);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState)
    try {
      const { data } = await addStudent({
        variables: { ...formState },
      });
    } catch (err) {
      console.error(err);
    }
  };
  
  return (
    <>
    <div>
    {data ? (
          <p>
            Success! You may now head <Link to="/">back to the homepage.</Link>
          </p>
        ) : (
      <div>
      <Container className=" header d-flex flex-column justify-content-start align-content-start p-3 w-25 fixed-top">
        <h1 className="py-2 ">New Student Form</h1>
      </Container>
      <Container className="studentform d-flex flex-column justify-center align-center mt-5 "
      onSubmit={handleFormSubmit}>
        <Form>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridFirstName">
              <Form.Label>Student First Name</Form.Label>
              <Form.Control
                type="firstname"
                placeholder="First Name"
                value={formState.firstName}
                onChange={handleChange}
                name="firstName"
              />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridLastName">
              <Form.Label>Student Last Name</Form.Label>
              <Form.Control
                type="lastname"
                placeholder="Last Name"
                value={formState.lastName}
                onChange={handleChange}
                name="lastName"
              />
            </Form.Group>
          </Row>
          <Row>
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>Parent Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={formState.parentEmail}
                onChange={handleChange}
                name="parentEmail"
              />
            </Form.Group>

            <Form.Group as={Col} className="mb-3" controlId="formGridFunding">
              <Form.Label>Funding Needed</Form.Label>
              <Form.Control
                data-type="currency"
                placeholder="$ 12,000"
                value={formState.fundingNeeded}
                onChange={handleChange}
                name="fundingNeeded"
              />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridDonor">
              <Form.Label>Donor</Form.Label>
              <Form.Select defaultValue="Choose...">
                <option>Choose...</option>
                <option>...</option>
              </Form.Select>
            </Form.Group>
          </Row>
        <Stack className="col-md-5 p-2 m-2 mx-auto ">
          {/* <Link to="/dashboard"> */}
            <Button variant="light" type="submit">
              Create
            </Button>
          {/* </Link> */}
        </Stack>
        </Form>
      </Container>
      </div>
       )}

       {error && (
         <div className="my-3 p-3 bg-danger text-white">{error.message}</div>
       )}
      </div>
    </>
  );
};

export default CreateStudentForm;
