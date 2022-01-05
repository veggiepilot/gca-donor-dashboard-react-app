import "./sidebar.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

const StudentSidebar = () => {
  return (
    <Navbar variant="dark" bg="primary" expand="lg" sticky="left">
      <Container fluid>
        <Navbar.Collapse id="GCA Dropdown Side Bar">
          <Nav>
            <NavDropdown
              id="nav-dropdown-dark-example"
              title="Student"
              menuVariant="primary"
            >
              <NavDropdown.Item href="#action/3.1">Veiw Student</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.2">Create Student</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default StudentSidebar;
