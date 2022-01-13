import { Form, Row, Col, Button,Stack,Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const donationForm = (props) => {





  

  return (
    <>
    <Container className=" header d-flex flex-column justify-content-center align-content-center p-3 w-25 fixed-top">
    <h1 className="py-2">New Donor Form</h1>
    </Container>

    <Container className="d-flex flex-column justify-center align-center mt-5">
      <Form>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridFirstName">
            <Form.Label>Student First Name</Form.Label>
            <Form.Control type="firstname" placeholder="John" />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridLastName">
            <Form.Label>Student Last Name</Form.Label>
            <Form.Control type="lastname" placeholder="Wick" />
          </Form.Group>
        </Row>

        <Form.Group className="mb-3" controlId="formGridAddress1">
          <Form.Label>Student Address</Form.Label>
          <Form.Control placeholder="1234 Main St" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formGridAddress2">
          <Form.Label>Address 2</Form.Label>
          <Form.Control placeholder="Apartment, studio, or floor" />
        </Form.Group>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridCity">
            <Form.Label>City</Form.Label>
            <Form.Control placeholder="Padhorje"/>
          </Form.Group>

          <Form.Group as={Col} controlId="formGridState">
            <Form.Label>State</Form.Label>
            <Form.Control placeholder="Belarus"/>
          </Form.Group>

          <Form.Group as={Col} controlId="formGridZip">
            <Form.Label>Zip</Form.Label>
            <Form.Control placeholder="55505"/>
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
             <Link to="/dashboard"><Button variant="light">Donate</Button></Link>
        </Stack>
      </Form>
    </Container>
    </>
  );
};

export default donationForm;
