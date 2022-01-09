import SideBar from "../components/dropDownComponents/sideBar";
import StudentDashboard from "../components/studentDashboard";
import {Col,Container,Row} from "react-bootstrap";
import Header from "../components/header";

const StudentVeiws = () => {
  return (
    <>
    <Header />
    <Container className="p-1" fluid="true">
      <Row>
        <Col lg={1} className="bg-primary-outline p-4">
          <SideBar />
        </Col>
        <Col lg={11} className="bg-primary p-4">
          <StudentDashboard />
        </Col>
      </Row>
    </Container>
    </>
  );
};
export default StudentVeiws;
