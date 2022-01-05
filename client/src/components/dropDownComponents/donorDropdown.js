import "./sidebar.css";
import NavDropdown from "react-bootstrap/NavDropdown";

const DonorSidebar = () => {
  return (
        <NavDropdown
          id="nav-dropdown-dark-example"
          title="Donor"
          menuVariant="primary"
        >
          <NavDropdown.Item href="#action/3.1">Veiw Donors</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.2">Create Donor Record</NavDropdown.Item>
        </NavDropdown>
  );
};

export default DonorSidebar;
