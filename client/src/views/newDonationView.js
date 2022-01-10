import { Col, Container, Row } from "react-bootstrap";
import Header from "../components/header"
import SideBar from "../components/sideBar"
import DonationForm from "../components/forms/donationForm"

const NewDonationView = () => {
  return (
    <>
      <Header />
      <Container fluid="true">
        <Row>
          <Col lg={1} className="bg-dark bg-gradient text-white p-4">
            <SideBar />
          </Col>
          <Col lg={11} className="bg-primary bg-gradient text-dark p-4 ">
            <DonationForm />
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default NewDonationView;
