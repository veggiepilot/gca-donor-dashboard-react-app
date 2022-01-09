import SideBar from "../components/dropDownComponents/sideBar";
import StudentDashboard from "../components/studentDashboard";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

const StudentVeiws = () => {
  return (
    <Container className="m-3" fluid="true">
      <Row>
        <Col lg={2} className="bg-primary">
          <SideBar />
        </Col>
        <Col lg={10} className="bg-primary">
          <StudentDashboard />
        </Col>
      </Row>
    </Container>
  );
};

export default StudentVeiws;
