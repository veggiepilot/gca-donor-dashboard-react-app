import { Container, Row, Col } from "react-bootstrap";
import SideBar from "../components/sideBar";
import Header from "../components/header";
import CardComponent from "../components/cards/cardComponent";

const DashboardView = () => {
  return (
    <>
      <Header />
      <Container fluid="true">
        <Row>
          <Col lg={1} className="bg-dark bg-gradient text-white p-4 ">
            <SideBar />
          </Col>
          <Col
            lg={11}
            className="bg-primary bg-gradient p-4 justify-content-center align-content-center p-4"
          >
            <CardComponent />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default DashboardView;
