/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Form, Row, Col, Button, Stack, Container } from "react-bootstrap";
import { useMutation, useApolloClient } from "@apollo/client";
import { useParams } from 'react-router-dom';
import { ADD_DONATION } from "../../utils/mutations";
import { useQuery } from "@apollo/client";
import { QUERY_STUDENTS } from "../../utils/queries";
import { Link } from "react-router-dom";

const DonationForm = () => {
  const { donorId } = useParams();
  const [formState, setFormState] = useState({
    donorId: donorId,
    amount: "",
    date: "",
    studentId: "",
  });

 
  const [addDonation, { error, data }] = useMutation(ADD_DONATION);
  
  const client = useApolloClient();
  const { students } = client.readQuery({
    query: QUERY_STUDENTS
  });

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);
    try {
      const { data } = await addDonation({
        variables: { ...formState },
      });
    } catch (err) {
      console.error(err.networkError.result.errors);
    }
  };
  const handleChange = (event) => {
    let { name, value } = event.target;
    if (name === "amount") {
      value = parseInt(value, 10);
      if (isNaN(value)) value = 0;
    }

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (
    <div>
      {data ? (
        <span>
          Success! You may now head{" "}
          <Link to="/dashboard">back to the homepage.</Link>
        </span>
      ) : (
        <div>
          <Container className=" header d-flex flex-column justify-content-start align-content-start p-3 w-25 fixed-top">
            <Container
              className="studentform d-flex flex-column justify-center align-center mt-5 "
              onSubmit={handleFormSubmit}
            >
              <Form>
                <Row className="mb-3">
                  <Form.Group as={Col} controlId="formGridFirstName">
                    <Form.Label>Donation Amount</Form.Label>
                    <Form.Control
                      type="amount"
                      placeholder="Donation Amount"
                      value={formState.amount}
                      onChange={handleChange}
                      name="amount"
                    />
                  </Form.Group>
                </Row>
                <Row>
                  <Form.Group as={Col} controlId="formGridDate">
                    <Form.Label>Date</Form.Label>
                    <Form.Control
                      type="date"
                      placeholder="place date"
                      value={formState.date}
                      onChange={handleChange}
                      name="date"
                    />
                  </Form.Group>
                </Row>

                <Row>
                <Form.Group as={Col} controlId="formDridStudentId">
                  <Form.Label>Select A Student</Form.Label>
                  <Form.Select
                    value={formState.studentId}
                    onChange={handleChange}
                    name="studentId">
                    {students &&
                      students.map(({ _id, firstName, lastName}) => (
                        <option key={_id} value={_id}>
                          {firstName} {lastName}
                        </option>
                      ))}
                  </Form.Select>
                  </Form.Group>
                </Row>
                <Stack className="col-md-5 p-2 m-2 mx-auto ">
                  <Button variant="light" type="submit">
                    Donate
                  </Button>
                </Stack>
              </Form>
            </Container>
          </Container>
        </div>
      )}
      {error && (
        <div className="my-3 p-3 bg-danger text-white">{error.message}</div>
      )}
    </div>
  );
};

export default DonationForm;
