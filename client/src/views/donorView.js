import SideBar from "../components/dropDownComponents/sideBar";
import DonorsCards from "../components/donorsCard"
import {Col,Row,Container} from "react-bootstrap";

import Header from "../components/header";

const DonorVeiw = () => {
  return (
    <>
    <Header/>
    <Container className="p-1" fluid="true">
      <Row>
        <Col lg={1} className="bg-primary p-4">
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