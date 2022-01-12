import { Col,Container,Row } from "react-bootstrap";
import SideBar from "../components/sideBar";
import NewStudentForm from "../components/forms/newStudentForm";

const StudentCreationView = () => {
  return (
      <Container fluid={true}>
      <Row className="min-vh-100 m-0"> 
          <Col lg={1} className="bg-dark bg-gradient text-white">
            <SideBar />
          </Col>
          <Col lg={11} className="bg-primary bg-gradient text-dark">
            <NewStudentForm />
          </Col>
        </Row>
      </Container>
  );
};
export default StudentCreationView;
