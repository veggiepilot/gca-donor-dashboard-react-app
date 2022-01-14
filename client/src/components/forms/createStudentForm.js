import { Form, Row, Col, Button, Stack, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const CreateStudentForm = () => {
  return (
    <>
      <Container className=" header d-flex flex-column justify-content-start align-content-start p-3 w-25 fixed-top">
        <h1 className="py-2 ">New Student Form</h1>
      </Container>
      <Container className="studentform d-flex flex-column justify-center align-center mt-5 ">
        <Form>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridFirstName">
              <Form.Label>Student First Name</Form.Label>
              <Form.Control type="firstname" placeholder="First Name" />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridLastName">
              <Form.Label>Student Last Name</Form.Label>
              <Form.Control type="lastname" placeholder="Last Name" />
            </Form.Group>
          </Row>
          <Row>
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>Parent Email</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group as={Col} className="mb-3" controlId="formGridFunding">
              <Form.Label>Funding Needed</Form.Label>
              <Form.Control data-type="currency" placeholder="$ 12,000" />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridDonor">
              <Form.Label>Donor</Form.Label>
              <Form.Select defaultValue="Choose...">
                <option>Choose...</option>
                <option>...</option>
              </Form.Select>
            </Form.Group>
          </Row>
        </Form>
        <Stack className="col-md-5 p-2 m-2 mx-auto ">
          <Link to="/dashboard">
            <Button variant="light">Create</Button>
          </Link>
        </Stack>
      </Container>
    </>
  );
};

export default CreateStudentForm;
