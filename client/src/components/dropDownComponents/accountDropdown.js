import "./sidebar.css";
import NavDropdown from "react-bootstrap/NavDropdown";
const AccountSidebar = () => {
  return (
        <NavDropdown
          id="nav-dropdown-dark-example"
          title="Account"
          menuVariant="primary"
        >
          <NavDropdown.Item href="#action/3.1">Account Overveiw</NavDropdown.Item>
        </NavDropdown>
  );
};

export default AccountSidebar;
