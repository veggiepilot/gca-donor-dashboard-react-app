import "./App.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Nav from 'react-bootstrap/Nav'
import StudentSidebar from "./components/studentsidebar";
import DonorSidebar from "./components/donorsidebar";
import AccountSidebar from "./components/accountsidebar";


function App() {
  return (
    <Container lg={12}>
      <Row>
        <Col sm={2}>
          <StudentSidebar />
          <DonorSidebar />
          <AccountSidebar />
        </Col>
        <Col sm={10}>Center Display</Col>
      </Row>
    </Container>
  );
}

export default App;
