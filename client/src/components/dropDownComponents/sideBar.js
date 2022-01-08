import { Link } from "react-router-dom";
import Accordion from "react-bootstrap/Accordion";
import Nav from "react-bootstrap/Nav";
const SideBar = () => {

  return (

    <div>
      <Accordion className="nav nav-sidebar">
        <Accordion.Item eventKey="0" className="w-100 mb-4 mt-4">
          <Accordion.Header>Student</Accordion.Header>
          <Accordion.Body>
           <Link to="/student"><Nav.Link >Student Overveiw</Nav.Link></Link>
            <Nav.Link >New Student</Nav.Link>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>

      <Accordion className="nav nav-sidebar">
        <Accordion.Item eventKey="1" className="w-100 mb-4 mt-4">
          <Accordion.Header>Donor</Accordion.Header>
          <Accordion.Body>
            <Link to="/donor"><Nav.Link>Donor Overveiw</Nav.Link></Link>
            <Nav.Link>New Donation</Nav.Link>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>

        <Accordion className="nav nav-sidebar">
        <Accordion.Item eventKey="2" className="w-100 mb-4 mt-4">
          <Accordion.Header>Account</Accordion.Header>
          <Accordion.Body>
            <Link to="/account"><Nav.Link>Account Overveiw</Nav.Link></Link>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
};

export default SideBar;

