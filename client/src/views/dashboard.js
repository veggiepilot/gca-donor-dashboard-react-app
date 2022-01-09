import { Container, Row, Col } from "react-bootstrap";

const Dashboard = (SideBar, CardComponent, Header) => {
  return (
    <>
      <Header />
      <Container className="p-1" fluid="true">
        <Row>
          <Col lg={1} className="bg-primary-outline p-4">
            <SideBar />
          </Col>
          <Col
            lg={11}
            className="bg-primary p-4 justify-content-center align-content-center"
          >
            <CardComponent />
            <CardComponent />
            <CardComponent />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Dashboard;
