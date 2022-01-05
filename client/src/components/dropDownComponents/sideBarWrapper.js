import "./sidebar.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import StudentDropdown from "./studentDropdown";
import DonorDropdown from "./donorDropdown";
import AccountDropdown from "./accountDropdown";

const SideBarWrapper = (Student, Donor, Account) => {
  return (
    <Navbar
      variant="dark"
      bg="light"
      expand="lg"
      collapseOnSelect
      expand="lg"
      sticky="left"
    >
      <Container>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav>
          <StudentDropdown />
          </Nav>
          <Nav>
          <DonorDropdown/>
          </Nav>
          <Nav>
          <AccountDropdown />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default SideBarWrapper;
