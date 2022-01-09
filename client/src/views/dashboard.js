import { Container, Row, Col } from "react-bootstrap";
import SideBar from "../sideBar";
import Header from "../components/header";
import CardComponent from "../components/cardComponent"

const Dashboard = () => {
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
