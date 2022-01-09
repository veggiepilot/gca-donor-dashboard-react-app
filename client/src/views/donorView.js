import { Col, Row, Container } from "react-bootstrap";

const DonorVeiw = (Header, DonorsCards, SideBar) => {
  return (
    <>
      <Header />
      <Container className="p-1" fluid="true">
        <Row>
          <Col lg={1} className="bg-primary-outline  p-4">
            <SideBar />
          </Col>
          <Col lg={11} className="bg-primary p-4">
            <DonorsCards />
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default DonorVeiw;
