import { Link } from "react-router-dom";
import { Accordion, Nav, Navbar, Col, Row, Button } from "react-bootstrap";
import Auth from '../utils/auth'

const SideBar = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };
  return (
    <Navbar className="fixed ">
      <Navbar.Toggle />
      <Nav className="d-flex flex-column justify-content-center align-content-center w-100 p-2">
        <Row>
          <Col>
            <Link to="/dashboard">
              <Button variant="light" className="w-100 mb-4 mt-4 btn-sm">
                Home
              </Button>
            </Link>
            <Accordion>
              <Accordion.Item eventKey="0">
                <Accordion.Header>Student</Accordion.Header>
                <Accordion.Body>
                  <Link
                    to="/student"
                    className="text-decoration-none text-dark"
                  >
                    Student Overview
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
              <Accordion.Item eventKey="1">
                <Accordion.Header>Donor</Accordion.Header>
                <Accordion.Body>
                  <Link to="/donor" className="text-decoration-none text-dark">
                    Donor Overview
                  </Link>
                  <br />
                  <br />
                  <Link
                    to="/newdonor"
                    className="text-decoration-none text-dark"
                  >
                    New Donor
                  </Link>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header>Account</Accordion.Header>
                <Accordion.Body>
                  <Link
                    to="/account"
                    className="text-decoration-none text-dark"
                  >
                    Account Overview
                  </Link>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
            {Auth.loggedIn() ? (
            <>
              <span>Hey there, {Auth.getProfile().data.firstName}!</span>
              <button className="btn btn-lg btn-light m-2" onClick={logout}>
                Logout
              </button>
            </>
          ) : (
            <>
              <Link className="btn btn-lg btn-info m-2" to="/">
                Login
              </Link>
            </>
          )}
          </Col>
        </Row>
      </Nav>
    </Navbar>
  );
};

export default SideBar;
