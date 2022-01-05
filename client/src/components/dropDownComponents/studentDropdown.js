import "./sidebar.css";
import NavDropdown from "react-bootstrap/NavDropdown";

const StudentDropdown = () => {
  return (
        <NavDropdown
          id="nav-dropdown-dark"
          title="Student"
          menuVariant="primary"
        >
          <NavDropdown.Item href="#action/3.1">Veiw Student</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.2">Create Student</NavDropdown.Item>
        </NavDropdown>
  );
};

export default StudentDropdown;
