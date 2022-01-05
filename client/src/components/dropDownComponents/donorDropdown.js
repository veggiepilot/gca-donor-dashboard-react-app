import "./sidebar.css";
import NavDropdown from "react-bootstrap/NavDropdown";
import Nav from "react-bootstrap/Nav";
const DonorSidebar = () => {
  return (
      <Nav>
        <NavDropdown
          id="nav-dropdown-dark"
          title="Donor"
          menuVariant="dark"
        >
          <NavDropdown.Item href="#action/3.1">Veiw Donors</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.2">Create Donor Record</NavDropdown.Item>
        </NavDropdown>
      </Nav>
  );
};

export default DonorSidebar;
