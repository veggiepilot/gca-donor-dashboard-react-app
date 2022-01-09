import { Outlet, Link } from "react-router-dom";
import { Accordion, Nav, Button } from "react-bootstrap";

const SideBar = () => {
  return (
    <>
      <Link to="/dashboard">
        <Button className="w-100  mb-4 mt-4 btn-sm">Home</Button>
      </Link>
      <Accordion>
        <Accordion.Item eventKey="0" className="w-100 mb-4 mt-4">
          <Accordion.Header>Student</Accordion.Header>
          <Accordion.Body>
            <Link to="/student" >Student Overveiw</Link>
            <Nav.Link>New Student</Nav.Link>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>

      <Accordion>
        <Accordion.Item eventKey="1" className="w-100 mb-4 mt-4">
          <Accordion.Header>Donor</Accordion.Header>
          <Accordion.Body>
            <Link to="/donor">Donor Overveiw</Link>
            <Nav.Link>New Donation</Nav.Link>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>

      <Accordion>
        <Accordion.Item eventKey="2" className="w-100 mb-4 mt-4">
          <Accordion.Header>Account</Accordion.Header>
          <Accordion.Body>
            <Link to="/account">Account Overveiw</Link>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
      <Outlet />
    </>
  );
};

export default SideBar;
