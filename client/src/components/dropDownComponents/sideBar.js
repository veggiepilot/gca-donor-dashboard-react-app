// import "./sidebar.css";
import React from "react";
import Container from "react-bootstrap/Container";
import Row from 'react-bootstrap/Row'
import Nav from "react-bootstrap/nav";
import { Navbar } from "react-bootstrap";
import Dropdown from 'react-bootstrap/Dropdown'

const SideBar = () => {
  return (
    <Container className="container-fluid">
      <Row>
        <div>
          <Navbar className="navbar-nav sidebar">
            <Nav.Item>
                <Dropdown>
                  <Dropdown.Toggle variant="light" id="dropdown-center">
                  <Dropdown.Item as="button">Students</Dropdown.Item>
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item><Nav.Link href="#home">Student Overveiw</Nav.Link></Dropdown.Item>
                    <Dropdown.Item><Nav.Link href="#link">New Student</Nav.Link></Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
            </Nav.Item>
            <Nav.Item>
            <Dropdown>
                  <Dropdown.Toggle variant="light" id="dropdown-center">
                  <Dropdown.Item as="button">Donors</Dropdown.Item>
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item><Nav.Link href="#home">Donor Overveiw</Nav.Link></Dropdown.Item>
                    <Dropdown.Item><Nav.Link href="#link">New Donation</Nav.Link></Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
            </Nav.Item>
            <Nav.Item>
            <Dropdown>
                  <Dropdown.Toggle variant="light" id="dropdown-center">
                  <Dropdown.Item as="button">Account</Dropdown.Item>
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item><Nav.Link href="#link">Account Overveiw</Nav.Link></Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
            </Nav.Item>
          </Navbar>
        </div>
      </Row>
    </Container>
  );
};

export default SideBar;
