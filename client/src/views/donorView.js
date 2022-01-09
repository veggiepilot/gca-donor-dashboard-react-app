import SideBar from "../components/dropDownComponents/sideBar";
import DonorsCards from "../components/donorsCard"
import {Col,Row,Container} from "react-bootstrap";

import Header from "../components/header";

const DonorVeiw = () => {
  return (
    <>
    <Header/>
    <Container className="m-3" fluid="true">
      <Row>
        <Col lg={2} className="bg-primary">
          <SideBar />
        </Col>
        <Col lg={10} className="bg-primary">
        <DonorsCards />
        </Col>
      </Row>
    </Container>
    </>
  );
};
export default DonorVeiw;