import "./sidebar.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

const DonorSidebar = () => {
  return (
    <Navbar variant="dark" bg="primary" expand="lg" sticky="left">
      <Container fluid>
        <Navbar.Collapse id="GCA Dropdown Side Bar">
          <Nav>
            <NavDropdown
              id="nav-dropdown-dark-example"
              title="Donor"
              menuVariant="primary"
            >
              <NavDropdown.Item href="#action/3.1">Veiw Donors</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.2">Create Donor Record</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default DonorSidebar;