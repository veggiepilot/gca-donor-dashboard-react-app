/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-no-duplicate-props */
import { Form, Row, Col, Button, Stack, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useMutation } from "@apollo/client";
import { ADD_DONOR } from "../../utils/mutations";

<<<<<<< HEAD
const donationForm = () => {

 const [formState, setFormState] = useState({
=======
const DonationForm = () => {
 const [donorFormState, setDonorFormState] = useState({
>>>>>>> fe5b8c5eae01292105519299b37ffb22fbff82e5
   firstName:"",
   lastName: "",
   address1: "",
   address2: "",
   city: "",
   state: "",
<<<<<<< HEAD
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
=======
   zip: 0,
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
>>>>>>> fe5b8c5eae01292105519299b37ffb22fbff82e5
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridFirstName">
              <Form.Label>First Name</Form.Label>
              <Form.Control 
              placeholder="John"
              type="firstName" 
              name="firstName"
<<<<<<< HEAD
              value={formState.firstName}
=======
              value={donorFormState.firstName}
>>>>>>> fe5b8c5eae01292105519299b37ffb22fbff82e5
              onChange={handleChange}
              />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridLastName">
              <Form.Label>Last Name</Form.Label>
              <Form.Control 
              placeholder="Doe"
              type="lastName" 
              name="lastName"
<<<<<<< HEAD
              value={formState.lastName}
=======
              value={donorFormState.lastName}
>>>>>>> fe5b8c5eae01292105519299b37ffb22fbff82e5
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
<<<<<<< HEAD
              value={formState.address1}
=======
              value={donorFormState.address1}
>>>>>>> fe5b8c5eae01292105519299b37ffb22fbff82e5
              onChange={handleChange} 
              />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridCity">
              <Form.Label>City</Form.Label>
              <Form.Control 
              placeholder="Hollywood"
              type="city"
              name="city"
<<<<<<< HEAD
              value={formState.city}
=======
              value={donorFormState.city}
>>>>>>> fe5b8c5eae01292105519299b37ffb22fbff82e5
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
<<<<<<< HEAD
              value={formState.address2}
=======
              value={donorFormState.address2}
>>>>>>> fe5b8c5eae01292105519299b37ffb22fbff82e5
              onChange={handleChange}
              />
            </Form.Group>
            <Form.Group as={Col} controlId="formGridState">
              <Form.Label>State</Form.Label>
              <Form.Control 
              placeholder="CA"
              type="state"
              name="state"
<<<<<<< HEAD
              value={formState.state}
=======
              value={donorFormState.state}
>>>>>>> fe5b8c5eae01292105519299b37ffb22fbff82e5
              onChange={handleChange}
              />
            </Form.Group>
            <Form.Group as={Col} controlId="formGridZip">
              <Form.Label>Zip</Form.Label>
              <Form.Control 
              placeholder="55505"
              type="zip"
              name="zip"
<<<<<<< HEAD
              value={formState.zip}
=======
              type="number"
              value={donorFormState.zip}
>>>>>>> fe5b8c5eae01292105519299b37ffb22fbff82e5
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
<<<<<<< HEAD
              value={formState.email}
=======
              value={donorFormState.email}
>>>>>>> fe5b8c5eae01292105519299b37ffb22fbff82e5
              onChange={handleChange} 
              />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPhone">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control 
              type="phone" 
              placeholder="(123)456-7890"
              name="phone"
<<<<<<< HEAD
              value={formState.phone}
=======
              value={donorFormState.phone}
>>>>>>> fe5b8c5eae01292105519299b37ffb22fbff82e5
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
<<<<<<< HEAD
        </Form>  
        </Container>   
      </div>
        )}
        {error && (
          <div className="my-3 p-3 bg-danger text-white">{error.message}</div>
        )}  
      </div>
=======
        </Form>
      </Container>
      </div>
             )}
             {error && (
              
               <div className="my-3 p-3 bg-danger text-white">{error.message}</div>
             )}
    </>
>>>>>>> fe5b8c5eae01292105519299b37ffb22fbff82e5
  );
};

export default DonationForm;
