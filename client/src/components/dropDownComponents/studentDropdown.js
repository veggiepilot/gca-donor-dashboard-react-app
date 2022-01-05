import "./sidebar.css";
import NavDropdown from "react-bootstrap/NavDropdown";
import Nav from "react-bootstrap/Nav";

const StudentDropdown = () => {
  return (
    <Nav>
        <NavDropdown
          id="nav-dropdown-dark"
          title="Student"
          menuVariant="dark"
        >
          <NavDropdown.Item href="#action/3.1">Veiw Student</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.2">Create Student</NavDropdown.Item>
        </NavDropdown>
    </Nav>
  );
};

export default StudentDropdown;
