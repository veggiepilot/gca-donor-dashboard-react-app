import { Col, Container, Row } from "react-bootstrap";

const StudentVeiws = (Header, SideBar, StudentDashboard) => {
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
