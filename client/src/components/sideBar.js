import { Link } from "react-router-dom";
import { Accordion, Button, Nav, Row, Col, Navbar } from "react-bootstrap";

const SideBar = () => {
  return (
    <Navbar>
      <Nav>
        <Row>
          <Col>
            <Accordion>
              <Accordion.Item eventKey="0" className="w-100 mb-4 mt-4">
                <Accordion.Header>Student</Accordion.Header>
                <Accordion.Body>
                  <Link to="/student">Student Overveiw</Link>
                  <br></br>
                  <Link to="/createstudent">New Student</Link>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Col>
        </Row>
        <Row>
          <Col>
            <Accordion>
              <Accordion.Item eventKey="1" className="w-100 mb-4 mt-4">
                <Accordion.Header>Donor</Accordion.Header>
                <Accordion.Body>
                  <Link to="/donor">Donor Overveiw</Link>
                  <br></br>
                  <Link to="/newdonation">New Donation</Link>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Col>
        </Row>
        <Row>
          <Col>
            <Accordion>
              <Accordion.Item eventKey="2">
                <Accordion.Header>Account</Accordion.Header>
                <Accordion.Body>
                  <Link
                    to="/account"
                    className="text-decoration-none text-dark"
                  >
                    Account Overveiw
                  </Link>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Col>
        </Row>
      </Nav>
    </Navbar>
  );
};

export default SideBar;

// //       <Link to="/dashboard">
// <Button className="w-100  mb-4 mt-4 btn-sm">Home</Button>
// </Link> //
