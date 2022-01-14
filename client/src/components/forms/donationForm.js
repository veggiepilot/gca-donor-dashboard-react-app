import { Form, Row, Col, Button, Stack, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useMutation } from "@apollo/client";
import { ADD_DONOR } from "../../utils/mutations";

const donationForm = () => {

 const [formState, setFormState] = useState({
   firstName:"",
   lastName: "",
   address1: "",
   address2: "",
   city: "",
   state: "",
   zip: "",
   email:"",
   phone: ""
 })
 const [addDonor,{error, data}] = useMutation(ADD_DONOR)

 const handleChange = (event) => {
  const { name, value } = event.target;

  setFormState({
    ...formState,
    [name]: value,
  });
}

  const handleDonorFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const {data} = await addDonor({
        variables: { ...formState },
      });
    }
    catch (e) {
      console.error(e);
    }
  }

    setFormState({
      firstName:"",
      lastName: "",
      address1: "",
      address2: "",
      city: "",
      state: "",
      zip: "",
      email:"",
      phone: ""
    });
  

  return (
  
    <div>
      <Container className=" header d-flex flex-column justify-content-center align-content-center p-3 w-25 fixed-top">
        <h1 className="py-2">New Donor Form</h1>
      </Container>
      {data ? (
          <p>
            Success! You may now head <Link to="/">back to the homepage.</Link>
          </p>
          
        ) : (
    <div>
      <Container className="donorform d-flex flex-column justify-center align-center mt-5">
        <Form onSubmit={handleFormSubmit}>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridFirstName">
              <Form.Label>First Name</Form.Label>
              <Form.Control 
              placeholder="John"
              type="firstName" 
              name="firstName"
              value={formState.firstName}
              onChange={handleChange}
              />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridLastName">
              <Form.Label>Last Name</Form.Label>
              <Form.Control 
              placeholder="Doe"
              type="lastName" 
              name="lastName"
              value={formState.lastName}
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
              value={formState.address1}
              onChange={handleChange} 
              />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridCity">
              <Form.Label>City</Form.Label>
              <Form.Control 
              placeholder="Hollywood"
              type="city"
              name="city"
              value={formState.city}
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
              value={formState.address2}
              onChange={handleChange}
              />
            </Form.Group>
            <Form.Group as={Col} controlId="formGridState">
              <Form.Label>State</Form.Label>
              <Form.Control 
              placeholder="CA"
              type="state"
              name="state"
              value={formState.state}
              onChange={handleChange}
              />
            </Form.Group>
            <Form.Group as={Col} controlId="formGridZip">
              <Form.Label>Zip</Form.Label>
              <Form.Control 
              placeholder="55505"
              type="zip"
              name="zip"
              value={formState.zip}
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
              name="email"
              value={formState.email}
              onChange={handleChange} 
              />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPhone">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control 
              type="phone" 
              placeholder="(123)456-7890"
              name="phone"
              value={formState.phone}
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
            <Link to="/dashboard">
              <Button variant="light">Donate</Button>
            </Link>
          </Stack>
        </Form>  
        </Container>   
      </div>
        )}
        {error && (
          <div className="my-3 p-3 bg-danger text-white">{error.message}</div>
        )}  
      </div>
  );
};

export default donationForm;
