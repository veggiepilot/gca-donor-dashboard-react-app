import "./sidebar.css";
import NavDropdown from "react-bootstrap/NavDropdown";
import Nav from "react-bootstrap/Nav";
const AccountSidebar = () => {
  return (
      <Nav>
        <NavDropdown
          id="nav-dropdown-dark"
          title="Account"
          menuVariant="dark"
        >
          <NavDropdown.Item href="#action/3.1">Account Overveiw</NavDropdown.Item>
        </NavDropdown>
      </Nav>
  );
};

export default AccountSidebar;
