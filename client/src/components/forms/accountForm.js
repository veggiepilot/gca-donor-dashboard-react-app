import { Form, Row, Col, Button, Stack, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const AccountForm = () => {
  return (
    <>
      <Container className=" header d-flex flex-column justify-content-center align-content-center p-3 w-25 fixed-top">
        <h1 className="py-2">Update Account Information</h1>
      </Container>

      <Container className="accountform">
        <Form>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridFirstName">
              <Form.Label>First Name</Form.Label>
              <Form.Control type="firstname" placeholder="John" />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridLastName">
              <Form.Label>Last Name</Form.Label>
              <Form.Control type="lastname" placeholder="Doe" />
            </Form.Group>
          </Row>
          <Row>
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
          </Row>
        </Form> 

         <Stack gap={2} className="col-md-5 mt-3 mx-auto">
            <Link to="/dashboard">
              <Button variant="secondary">Save changes</Button>
            </Link>
        </Stack>

      </Container>
    </>
  );
};

export default AccountForm;
