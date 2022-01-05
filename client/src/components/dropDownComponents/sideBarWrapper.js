import "./sidebar.css";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Stack from 'react-bootstrap/Stack'
import Navbar from "react-bootstrap/Navbar";
import StudentDropdown from "./studentDropdown";
import DonorDropdown from "./donorDropdown";
import AccountDropdown from "./accountDropdown";

const SideBarWrapper = (Student, Donor, Account) => {
  return (

    <Col lg={2}>
    <Navbar
      variant="dark"
      bg="dark"
      collapseOnSelect
      expand="md"
      sticky="left"
    >
      <Container>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
        <Stack gap={3}>
          <StudentDropdown />
          <DonorDropdown/>
          <AccountDropdown />
        </Stack>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </Col>
  );
};

export default SideBarWrapper;
