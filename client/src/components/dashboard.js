import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import SideBar from "./dropDownComponents/sideBar";
import StudentVeiws from "./studentVeiw";

const Dashboard = () => {
  return (
    <Container>
      <Row lg={12}>
        <Col lg={2}>
          <SideBar/>
        </Col>
        <Col lg={10}>
         <StudentVeiws/>
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;
