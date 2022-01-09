import SideBar from "../components/dropDownComponents/sideBar";
import StudentDashboard from "../components/studentDashboard";
import {Col,Container,Row} from "react-bootstrap";
import Header from "../components/header";

const StudentVeiws = () => {
  return (
    <>
    <Header />
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
    </>
  );
};
export default StudentVeiws;
