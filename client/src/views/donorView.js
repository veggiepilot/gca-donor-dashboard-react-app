import { Col, Row, Container } from "react-bootstrap";
import Header from "../components/header";
import DonorsCard from "../components/cards/donorsCard";
import SideBar from "../components/sideBar";

const DonorView = () => {
  return (
    <>
      <Header />
      <Container fluid="true">
        <Row>
          <Col lg={1} className="bg-dark bg-gradient text-white p-4">
            <SideBar />
          </Col>
          <Col lg={11} className="bg-primary bg-gradient p-4">
            <DonorsCard />
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default DonorView;
