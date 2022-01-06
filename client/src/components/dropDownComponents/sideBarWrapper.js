import "./sidebar.css";
import Container from "react-bootstrap/Container";
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Accordion from "react-bootstrap/Accordion";
import Nav from "react-bootstrap/nav";

const SideBarWrapper = () => {
  return (
    <Container className="container-fluid">
      <Row>
        <Col className="sidebar">
      <Accordion className="nav nav-sidebar">
        <Accordion.Item eventKey="0">
          <Accordion.Header>Student</Accordion.Header>
          <Accordion.Body>
            <Nav.Link href="#home">Student Overveiw</Nav.Link>
            <Nav.Link href="#link">New Student</Nav.Link>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Donor</Accordion.Header>
          <Accordion.Body>
            <Nav.Link href="#home">Donor Overveiw</Nav.Link>
            <Nav.Link href="#link">New Donation</Nav.Link>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="2">
          <Accordion.Header>Account</Accordion.Header>
          <Accordion.Body>
            <Nav.Link href="#link">Account Overveiw</Nav.Link>
          </Accordion.Body>
        </Accordion.Item>

      </Accordion>
      </Col>
      </Row>
    </Container>
  );
};

export default SideBarWrapper;