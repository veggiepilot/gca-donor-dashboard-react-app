import Accordion from "react-bootstrap/Accordion";
import Nav from "react-bootstrap/Nav";

const SideBar = () => {

  return (

    <div>
      <Accordion className="nav nav-sidebar">
        <Accordion.Item eventKey="0" className="w-100">
          <Accordion.Header>Student</Accordion.Header>
          <Accordion.Body>
            <Nav.Link href="#home">Student Overveiw</Nav.Link>
            <Nav.Link href="#link">New Student</Nav.Link>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>

      <Accordion className="nav nav-sidebar">
        <Accordion.Item eventKey="1">
          <Accordion.Header>Donor</Accordion.Header>
          <Accordion.Body>
            <Nav.Link href="#home">Donor Overveiw</Nav.Link>
            <Nav.Link href="#link">New Donation</Nav.Link>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>

        <Accordion className="nav nav-sidebar">
        <Accordion.Item eventKey="2">
          <Accordion.Header>Account</Accordion.Header>
          <Accordion.Body>
            <Nav.Link href="#link">Account Overveiw</Nav.Link>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
};

export default SideBar;

