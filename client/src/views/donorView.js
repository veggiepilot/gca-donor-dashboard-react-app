import { Col, Row, Container } from "react-bootstrap";
import Header from "../components/header";
import DonorsCard from "../components/donorsCard";
import SideBar from "../components/dropDownComponents/sideBar";

const DonorView = () => {
  return (
    <>
      <Header />
      <Container className="p-1" fluid="true">
        <Row>
          <Col lg={1} className="bg-primary-outline  p-4">
            <SideBar />
          </Col>
          <Col lg={11} className="bg-primary p-4">
            <DonorsCard />
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default DonorView;
