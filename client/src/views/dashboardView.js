import { Container, Row, Col } from "react-bootstrap";
import SideBar from "../components/sideBar";
import CardComponent from "../components/cards/cardComponent";

const DashboardView = () => {
  return (
      <Container fluid={true}>
      <Row className="min-vh-100 m-0"> 
          <Col lg={1} className="bg-dark bg-gradient text-white">
            <SideBar />
          </Col>
          <Col
            sm={11}
            className="bg-primary bg-gradient"
          > 
            <CardComponent />
          </Col>
        </Row>
      </Container>
  );
};

export default DashboardView;
