import { Col, Container, Row } from "react-bootstrap";
import Header from "../components/header"
import SideBar from "../components/sideBar"
import DonationForm from "../components/forms/donationForm"

const NewDonationView = () => {
  return (
    <>
      <Header />
      <Container className="w-100 d-flex flex-column justify-content-center align-content-center" fluid="true">
        <Row>
          <Col lg={1} className="bg-dark bg-gradient text-white p-4">
            <SideBar />
          </Col>
          <Col lg={11} className="bg-primary bg-gradient text-dark p-4 d-flex flex-column justify-content-center align-content-center ">
            <DonationForm />
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default NewDonationView;
