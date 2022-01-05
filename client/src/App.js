import "./App.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Sidebar from "./components/sidebar";

function App() {
  return (
    <Container>
      <Row>
        <Col sm={4}>
          <Sidebar />
        </Col>
        <Col sm={8}>Center Display</Col>
      </Row>
    </Container>
  );
}

export default App;
