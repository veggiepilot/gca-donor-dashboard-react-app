/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-no-duplicate-props */
import { Form, Row, Col, Button, Stack, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useMutation } from "@apollo/client";
import { ADD_DONOR } from "../../utils/mutations";

const DonationForm = () => {
 const [donorFormState, setDonorFormState] = useState({
   firstName:"",
   lastName: "",
   address1: "",
   address2: "",
   city: "",
   state: "",
   zip: 90874,
   email:"",
   phone: ""
 });

 const [addDonor,{error, data}] = useMutation(ADD_DONOR)

  const handleDonorFormSubmit = async (event) => {
    event.preventDefault();
    console.log(donorFormState)
    try {
      const { data } = await addDonor({
        variables: { ...donorFormState },
      });
    } catch (err) {
      console.error(err.networkError.result.errors);
    }
  };
    const handleChange = (event) => {
      const { name, value } = event.target;
    
      setDonorFormState({
        ...donorFormState,
        [name]: value,
      });
    };
  return (
    <>
    {data ? ( 
             <p>
             Success! You may now head <Link to="/dashboard">back to the homepage.</Link>
           </p>
         ) : (
      <div>
      <Container className=" header d-flex flex-column justify-content-center align-content-center p-3 w-25 fixed-top">
        <h1 className="py-2">New Donor Form</h1>
      </Container>
      <Container className="donorform d-flex flex-column justify-center align-center mt-5" onSubmit={handleDonorFormSubmit} >
        <Form>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridFirstName">
              <Form.Label>First Name</Form.Label>
              <Form.Control 
              placeholder="John"
              type="firstName" 
              name="firstName"
              value={donorFormState.firstName}
              onChange={handleChange}
              />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridLastName">
              <Form.Label>Last Name</Form.Label>
              <Form.Control 
              placeholder="Doe"
              type="lastName" 
              name="lastName"
              value={donorFormState.lastName}
              onChange={handleChange}
              />
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridAddress1">
              <Form.Label>Address 1</Form.Label>
              <Form.Control 
              placeholder="1234 Main St"
              type="address1"
              name="address1"
              value={donorFormState.address1}
              onChange={handleChange} 
              />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridCity">
              <Form.Label>City</Form.Label>
              <Form.Control 
              placeholder="Hollywood"
              type="city"
              name="city"
              value={donorFormState.city}
              onChange={handleChange} 
              />
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} className="mb-3" controlId="formGridAddress2">
              <Form.Label>Address 2</Form.Label>
              <Form.Control 
              placeholder="Apartment, studio, or floor"
              type="address2"
              name="address2"
              value={donorFormState.address2}
              onChange={handleChange}
              />
            </Form.Group>
            <Form.Group as={Col} controlId="formGridState">
              <Form.Label>State</Form.Label>
              <Form.Control 
              placeholder="CA"
              type="state"
              name="state"
              value={donorFormState.state}
              onChange={handleChange}
              />
            </Form.Group>
            <Form.Group as={Col} controlId="formGridZip">
              <Form.Label>Zip</Form.Label>
              <Form.Control 
              placeholder="55505"
              type="zip"
              name="zip"
              value={donorFormState.zip}
              onChange={handleChange} 
              />
            </Form.Group>
          </Row>
          <Row className="mb-3"></Row>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control 
              type="email" 
              placeholder="email@gmail.com"
              type="email"
              name="email"
              value={donorFormState.email}
              onChange={handleChange} 
              />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPhone">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control 
              type="phone" 
              placeholder="(123)456-7890"
              type="phone"
              name="phone"
              value={donorFormState.phone}
              onChange={handleChange} 
              />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridStudent">
              <Form.Label>Student(s)</Form.Label>
              <Form.Select defaultValue="Choose...">
                <option>Choose...</option>
                <option>...</option>
              </Form.Select>
            </Form.Group>
          </Row>
          <Stack gap={2} className="col-md-5 mx-auto">
            {/* <Link to="/dashboard"> */}
              <Button variant="light" type="submit">Donate</Button>
            {/* </Link> */}
          </Stack>
        </Form>
      </Container>
      </div>
             )}
             {error && (
              
               <div className="my-3 p-3 bg-danger text-white">{error.message}</div>
             )}
    </>
  );
};

export default DonationForm;
