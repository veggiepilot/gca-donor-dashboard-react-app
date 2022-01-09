import SideBar from "../components/dropDownComponents/sideBar";
import DonorCards from "../components/donorsCard"
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

const DonorVeiw = () => {
  return (
    <Container className="m-3" fluid="true">
      <Row>
        <Col lg={2} className="bg-primary">
          <SideBar />
        </Col>
        <Col lg={10} className="bg-primary">
        <DonorCards />
        </Col>
      </Row>
    </Container>
  );
};
export default DonorVeiw;