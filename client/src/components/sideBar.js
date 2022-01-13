import { Link } from "react-router-dom";
import { Accordion, Nav, Navbar, Col, Row, Button } from "react-bootstrap";

const SideBar = () => {
  return (
    <Navbar>
      <Nav className="d-flex flex-column justify-content-center align-content-center w-100">
        <Row>
          <Col>
            <Link to="/dashboard">
              <Button className="w-100  mb-4 mt-4 btn-sm">Home</Button>
            </Link>
            <Accordion>
              <Accordion.Item eventKey="0">
                <Accordion.Header>Student</Accordion.Header>
                <Accordion.Body>
                  <Link
                    to="/student"
                    className="text-decoration-none text-dark"
                  >
                    Student Overveiw
                  </Link>
                  <br />
                  <br />
                  <Link
                    to="/newstudent"
                    className="text-decoration-none text-dark"
                  >
                    New Student
                  </Link>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Col>
        </Row>

        <Row>
          <Col>
            <Accordion>
              <Accordion.Item eventKey="1">
                <Accordion.Header>Donor</Accordion.Header>
                <Accordion.Body>
                  <Link to="/donor" className="text-decoration-none text-dark">
                    Donor Overveiw
                  </Link>
                  <br />
                  <br />
                  <Link
                    to="/newdonation"
                    className="text-decoration-none text-dark"
                  >
                    New Donation
                  </Link>
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
