import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import SideBar from "./dropDownComponents/sideBar";
import StudentVeiws from "./studentVeiw";

const Dashboard = () => {
  return (
    <Container lg={12} className="m-3">
      <Row>
        <Col lg={4} className="m-3">
          <SideBar/>
        </Col>
        <Col lg={6} className="m-3">
         <StudentVeiws/>
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;
