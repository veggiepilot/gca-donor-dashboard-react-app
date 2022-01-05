import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import SideBarWrapper from "./dropDownComponents/sideBarWrapper";

const DashboardWrapper = () => {
  return (
    <Container lg={12}>
      <Row>
      <SideBarWrapper />
        <Col lg={8}>Center Display</Col>
      </Row>
    </Container>
  );
};

export default DashboardWrapper;